


export const goToHome = (navigate) =>{
    navigate('/')
}

export const goToProfile = (navigate) =>{
    navigate('/profile')
}

export const goToProduct = (navigate, product_id) =>{

    navigate(`/product/:${product_id}`)
}