import LayoutBase from "../components/layout";

const BreadCrumb = ["Home", "Minha Rede"];

const Networking = () => {
  const Actions = "";

  return (
    <LayoutBase breadcrumb={BreadCrumb} title="Minha Rede" actions={Actions}>
      <h1>teste</h1>
    </LayoutBase>
  );
};

export default Networking;
