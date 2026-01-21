import type { IToast } from "./Toast";
import Toast from "./Toast";

const toasts: IToast[] = [
  { type: "success", message: "Your content successfully added!" },
  { type: "error", message: "Your content successfully deleted!" },
  { type: "warning", message: "Your image is 5Mb, it may load longer!" },
  { type: "info", message: "Your content is publicly visible" }
];

function App() {
  return (
    <main className='mx-auto flex min-h-screen w-full min-w-dvw flex-col items-center justify-center gap-6'>
      {toasts.map((toast, index) => (
        <Toast
          key={index}
          type={toast.type}
          message={toast.message}
        />
      ))}
    </main>
  );
}

export default App;
