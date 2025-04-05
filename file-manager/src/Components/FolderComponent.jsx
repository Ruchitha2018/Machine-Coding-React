const FolderComponent = ({childrenData}) => {
    return (
        <li>
            {childrenData.name} 
            
            {childrenData.children && (
                <ul>
                    <button>Add Folder</button>
                    <button>Add File</button>
                {childrenData.children && childrenData.children.map((item) => (
                    <>
                    <FolderComponent childrenData={item} />
                    
                    </>
                     
                ))}
                </ul>
            )}
           
        </li>
    )
}

export default FolderComponent;