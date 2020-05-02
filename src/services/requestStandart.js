///onSubmit
this.setState({ lock: true });
const response = await login(model);
if (!response) {
    console.log("Response boş");
    this.setState({ lock: false });
    return;
}

if (response.status) {
    this.props.navigation.navigate('Home');
} else {
    console.log("Response", response);
    alert(response.message);
    this.setState({ lock: false });
}

//request 
try {
    return (await axios.post(baseUrl + '/login', model)).data;

} catch (err) {
    console.log(err);
    return errorResponse;
}