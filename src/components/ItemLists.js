import { CON_URL } from "../uitls/images/constants";

const ItemLists = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2 border-black border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                -₹{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 p-4">
          <div className="absolute">
            <button className="p-2 mx-8 rounded-lg bg-black text-white  shadow-lg  m-auto">Add +</button>
            </div>
            <img className="w-full" src={CON_URL +item.card.info.imageId}/>
          </div>
          
        </div>
      ))}
    </div>
  );
};
export default ItemLists;
