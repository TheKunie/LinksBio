import { useFormik } from "formik";

const FormK = () => {
  return (
    <form onSubmit={formik.handleSubmit}>
      <input id="title" name="title" onChange={formik.handleChange}></input>
      <input id="name" name="name" onChange={formik.handleChange}></input>
      <input id="link" name="link" onChange={formik.handleChange}></input>
      <button type="submit">Submit</button>
    </form>
  );
};
