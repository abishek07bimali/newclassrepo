const ListandKeysDefault = () => {
    const [list, setList] = useState(["product1", "product2", "product3","product4",])
    return (
        <div>
            <ul className='flex flex-col'>
                {list.map((item, index) => (
                    <div className='border border-amber-500 m-4'>
                        <li key={index} >  {item}</li>

                    </div>
                ))}
            </ul>
        </div>
    );
}

export default ListandKeysDefault