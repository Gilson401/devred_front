import LayoutBase from "../components/layout";

const BreadCrumb = ["Home", "Painel"];

const Panel = () => {
  const Actions = "";

  return (
    <LayoutBase breadcrumb={BreadCrumb} title="Painel" actions={Actions}>
      <h1>teste</h1>
    </LayoutBase>
  );
};

export default Panel;
