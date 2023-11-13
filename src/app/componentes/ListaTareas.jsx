import Pila from "./Pila";
import Image from "next/image";

const ListaTareas = () => {
  return (
    <div className="container text-center">
      <div className="mb-3 flex flex-row justify-between h-[5rem] rounded-md overflow-hidden">
        <Image
          src="/images/img1.png"
          alt="Imagen no disponible"
          width={175}
          height={200}
          quality="100"
        />
          <Image
            src="/images/img2.png"
            alt="Imagen no disponible"
            width={200}
            height={200}
            quality="100"
          />
      </div>

      <h1 className="mx-auto p-3 text-xl bg-slate-700 rounded-md">FORO II. PILAS (STACK)</h1>
      <Pila />
    </div>
  );
};

export default ListaTareas;
