import Header from "./components/Header";
import Layout from "./router/Layout";

const App = () => {
  return (
    <div style={{ background: "lightgray", height: "100vh" }}>
      <Header />
      <Layout />
    </div>
  );
};

export default App;
