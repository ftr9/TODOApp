let Cardcomponent = (props) => {

    const { properties } = props;

    return (
        <div className="card">
            <p style={{ textDecoration: (properties.status === "no") ? 'none' : 'line-through' }}>{properties.name}</p>
            <div>
                <button onClick={() => {
                    let list = [...properties.todoList];
                    list.forEach((el) => {
                        if (el.name === properties.name) {
                            el.status = "yes";
                        }
                    })

                    properties.settodoList(list);
                }}>{properties.status === "no" ? "Completed ?" : "DONE"} </button>
                <button onClick={() => {
                    const list = [...properties.todoList];
                    properties.settodoList(list.filter((el) => el.name !== properties.name));
                }}>Delete</button>
            </div>
        </div>
    )

}

export default Cardcomponent;