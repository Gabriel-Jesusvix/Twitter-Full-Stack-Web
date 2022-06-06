import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "../components/Input";
import axios from "axios";

export function Signup({ signInUser }) {
  const validationSchema = Yup.object({
    name: Yup.string().required("Nome is required"),
    username: Yup.string().required("username is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string().required("Password is required"),
  });
  const formik = useFormik({
    onSubmit: async (values) => {
      const { data } = await axios.post("http://localhost:4000/signup", {
        name: values.name,
        username: values.email,
        email: values.email,
        password: values.password,
      });
      signInUser(data);
    },
    validationSchema,
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="h-full flex flex-col justify-center items-center p-6 space-y-6">
      <h1 className=" text-3xl">Crie sua conta</h1>
      <form className="w-full space-y-6" onSubmit={formik.handleSubmit}>
        <div className="space-y-2">
          <Input
            type="text"
            name="name"
            placeholder="Nome"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={formik.isSubmitting}
          />

          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          )}
        </div>
        <div className="space-y-2">
          <Input
            type="text"
            name="username"
            placeholder="Nome de usuário"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={formik.isSubmitting}
          />

          {formik.touched.username && formik.errors.username && (
            <div className="text-red-500 text-sm">{formik.errors.username}</div>
          )}
        </div>
        <div className="space-y-2">
          <Input
            type="text"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={formik.isSubmitting}
          />

          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}
        </div>

        <div className="space-y-2">
          <Input
            type="text"
            name="password"
            placeholder="Senha"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={formik.isSubmitting}
          />

          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-birdBlue py-4 rounded-full disabled:opacity-50 text-lg"
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {formik.isSubmitting ? "Enviando..." : "Cadastrar"}
        </button>
      </form>
      <span className="text-sm text-silver">
        já tem conta?{" "}
        <a className="text-birdBlue" href="/login">
          Acesse
        </a>
      </span>
    </div>
  );
}
