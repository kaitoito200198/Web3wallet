const getParams = () => {
  if( window.location.href.toString().includes("?")===false){
    const params = {
      "token1":"ETH1",
      "token2":"ETH1"
    }
    return params;
  }
    const queryString = window.location.href.split("?")[1];
    const queryParams = queryString.split("&");
    const params = {};
    queryParams.forEach((param) => {
      const [key, value] = param.split("=");
      params[key] = value;
    });
    return params;
};
export default getParams;