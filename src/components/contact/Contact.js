import React, { useState } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",    
    email: "",   
    mensagem: "",
  });
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Validação do email
  const emailValidation = (email) => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    const { username, email, mensagem } = formData;

    if (username === "") {
      setErrMsg("Por favor, digite o seu nome!");
    } else if (email === "") {
      setErrMsg("Por favor, preencha o email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Por favor, utilize um email válido!");
    } else if (mensagem === "") {
      setErrMsg("Mensagem necessária!");
    } else {
      setSuccessMsg(`Obrigado, ${username}. Sua mensagem foi enviada com sucesso!`);
      setErrMsg("");
      setFormData({
        username: "",     
        email: "",       
        mensagem: "",
      });

      const templateParams = {
        user_name: username,
        message: mensagem,
        user_email: email     
      };

      try {
        const response = await emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_API_KEY);
        console.log('EMAIL ENVIADO:', response.status, response.text);
        setFormData((prevFormData) => ({
          ...prevFormData,
          username: "",
          email: "",
          mensagem: ""
        }));
      } catch (err) {
        console.log('ERRO:', err);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Sinta-se à vontade para entrar em contato" des="Contato" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}              
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Seu Nome
                  </p>
                  <input
                    onChange={handleInputChange}
                    value={formData.username}
                    name="username"
                    className={`${
                      errMsg === "Por favor, digite o seu nome!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>                
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input
                  onChange={handleInputChange}
                  value={formData.email}
                  name="email"
                  className={`${
                    errMsg === "Por favor, preencha o email!" &&
                    "outline-designColor"
                  } contactInput`}
                  type="email"
                />
              </div>           
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Mensagem
                </p>
                <textarea
                  onChange={handleInputChange}
                  value={formData.mensagem}
                  name="mensagem"
                  className={`${
                    errMsg === "Mensagem necessária!" && "outline-designColor"
                  } contactTextArea`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Enviar mensagem
                </button>
              </div>
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
