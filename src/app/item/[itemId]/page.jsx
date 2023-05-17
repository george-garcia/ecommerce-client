export default async function itemId({params}){

    // const {itemId} = params;

    function test(){
        console.log(params);
    }
    test();
    return(
        <div>
            itemId
            {test()}
        </div>
    );
}