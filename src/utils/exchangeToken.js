const exchangeToken =({value1, value2, rate, setPrice}) => {
    value1.current.value = (Number(value2.current.value) * rate).toFixed(3);
    setPrice(Number(value1.current.value) * 10);
}
export default exchangeToken;