export default function NewsSection(item) {
    return (
      <div class="p-6 mb-7 max-w-7xl mx-auto bg-white rounded-xl shadow-none flex items-center hover:shadow-lg cursor-pointer">
        <div class="shrink-0">
          <img src={item.imageLink} width={200} height={150}></img>
        </div>
        <div class="pl-28 pt-2">
          <div class="text-xl font-medium text-black break-words">
            {item.title}
          </div>
          <p class="text-slate-500">{item.desription}</p>
        </div>
      </div>
    );
  }
  