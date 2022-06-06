import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "../components/Input";
import axios from "axios";

export function Login({ signInUser }) {
  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const formik = useFormik({
    onSubmit: async (values) => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_HOST}/login`,
        {
          auth: {
            username: values.email,
            password: values.password,
          },
        }
      );
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
    <div className="h-full flex  justify-center">
      <div className="bg-birdBlue lg:flex-1"></div>
      <div className=" flex-1 flex  flex-col justify-center p-6 space-y-6">
        <h1 className=" text-3xl">Acesse sua conta</h1>
        <form className="w-full space-y-6" onSubmit={formik.handleSubmit}>
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
              type="password"
              name="password"
              placeholder="Senha"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
            />

            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm">
                {formik.errors.password}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-birdBlue py-4 rounded-full disabled:opacity-50 text-lg"
            disabled={formik.isSubmitting || !formik.isValid}
          >
            {formik.isSubmitting ? "Enviando..." : "Entrar"}
          </button>
        </form>
        <span className="text-sm text-silver">
          Não tem conta?{" "}
          <a className="text-birdBlue" href="/signup">
            {" "}
            Inscreva-se
          </a>
        </span>
      </div>
    </div>
  );
}
