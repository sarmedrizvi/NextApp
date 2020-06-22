import Head from "next/head";
import Button from "@material-ui/core/Button";
import Router from "next/router";
import Layout from "../components/layout";

const Home = ({ children }) => (
  <div className="container">
    <Layout>
     

      <Button
        variant="contained"
        color="primary"
        onClick={() => Router.push("/Home")}
      >
        Hello
      </Button>
    </Layout>
  </div>
);

export default Home;
//  <style jsx global>{`
//    html,
//    body {
//      padding: 0;
//      margin: 0;
//      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
//        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
//    }

//    * {
//      box-sizing: border-box;
//    }
//  `}</style>;
