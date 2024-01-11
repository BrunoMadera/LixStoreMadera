

const Spinner = () => {

    return (
        <>

            <div className="container text-center align-middle" style={{marginTop: '80px', color: '#C454EB', height: "95vh"}}>
                <p className="h4" style={{color: 'white'}}>Carregando as melhores ofertas...</p>
                <div className="spinner-grow" style={{width: '500px', height: '500px'}} role="status">
                </div>
            </div>

        </>
    )
}

export default Spinner;