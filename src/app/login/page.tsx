"use client";
import { Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { TLogin } from "../../../utils/types/auth";
import { useRouter } from "next/navigation";
import { useAuth } from "../../hooks/useAuth"; // Importa el hook useAuth

const Login = () => {
    const router = useRouter();
    const { login } = useAuth(); // Extrae login desde useAuth

    const handleSubmit = (values: TLogin) => {
        console.log(values);
      
        login(values)
          .then((data) => {
            if (data?.success) {
              // add your code for post successful login here
              setTimeout(() => {
                router.push("/");
              }, 1000);
            } else console.log(data.message);
          })
          .catch((err) => {
            console.log(err);
          });
      };

  return (
    <div className="max-w-[100vw] p-5">
      <h3 className="mb-5 text-4xl font-medium">Login</h3>

      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(
          values: TLogin,
          { setSubmitting }: FormikHelpers<TLogin>
        ) => {
          setTimeout(() => {
            handleSubmit(values);
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form className="grid w-96 grid-cols-2 gap-3">
          <label htmlFor="username">username</label>
          <Field
            id="username"
            name="username"
            placeholder="Enter username"
            type="text"
          />

          <label htmlFor="password">Password</label>
          <Field
            id="password"
            name="password"
            type="password"
            placeholder="Enter password"
          />

          <button
            type="submit"
            className="w-fit border border-black/75 px-4 py-1"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
