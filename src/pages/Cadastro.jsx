import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";

const cadastro = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value.trim() });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.nome || !formData.email || !formData.senha) {
      return setErrorMessage("Por favor, preencha todos os campos!!!");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("http://localhost:3000/api/paciente/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        return setErrorMessage(data.message || "Erro ao registrar usuário");
      }
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              S.E CLINICS
            </span>
          </Link>
          <p className="text-sm mt-5">
            Realize seu cadastro em nossa plataforma, e entre em contato com os
            melhores profissionais da saúde de nosso estado
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="nome" />
              <TextInput
                type="text"
                placeholder="Insira seu nome de usuário"
                id="nome"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="email" />
              <TextInput
                type="email"
                placeholder="insira seu email..."
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="senha" />
              <TextInput
                type="password"
                placeholder="Insira sua senha..."
                id="senha"
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Por favor Aguarde...</span>
                </>
              ) : (
                "Cadastrar"
              )}
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Já possui uma conta? Então efetue seu</span>
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default cadastro;
