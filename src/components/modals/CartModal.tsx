interface ICartModal {
  cartCount: number;
  setCartCount: Function;
  setIsCartModalOpen: Function;
}

export const CartModal = ({
  cartCount,
  setCartCount,
  setIsCartModalOpen,
}: ICartModal) => {
  return (
    <div
      className="min-h-full min-w-full bg-[#00000080] backdrop-blur-sm flex justify-center items-center absolute top-0 left-0 px-10"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsCartModalOpen(false);
        }
      }}
    >
      <div
        className="bg-white p-5 rounded max-w-xl w-full min-h-[500px] flex flex-col"
        id="cart_modal_main"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">Cart: {cartCount}</h1>
          <button
            type="button"
            className="ml-auto select-none"
            onClick={() => setIsCartModalOpen(false)}
          >
            ✖
          </button>
        </div>
        <button
          type="button"
          onClick={() => setCartCount(0)}
          className="bg-x-blue text-white p-2 rounded mt-auto"
        >
          Clear
        </button>
      </div>
    </div>
  );
};
