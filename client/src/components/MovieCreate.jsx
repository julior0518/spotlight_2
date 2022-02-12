import '../style/movieCreate.css'

function MovieCreate({animate}) {
    function handleChange(){

    }
    return (
        <div className="MovieCreate">
            <form className="MovieForm">
                <input 
                    onChange={handleChange}  
                    placeholder="Image" 
                    id="image" 
                    type="image" 
                    className='inputForm'
                ></input>
                <input 
                    onChange={handleChange}  
                    placeholder="Title" 
                    id="name" 
                    type="text" 
                    className='inputForm'
                ></input>
                <input 
                    onChange={handleChange}  
                    placeholder="Description" 
                    id="description" 
                    type="text" 
                    className='inputForm'
                ></input>
                <input 
                    onChange={handleChange}  
                    placeholder="Budget" 
                    id="budget" 
                    type="text" 
                    className='inputForm'
                ></input>
            </form>
        </div>
    );
    }
    
    export default MovieCreate;