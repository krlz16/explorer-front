import { ReactNode, useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={modalRef}
      className="bg-gray-200 p-6 rounded-lg shadow-lg w-[400px] h-[300px] flex flex-col justify-center items-center backdrop:bg-black/70"
      onCancel={onClose}
      aria-labelledby="modal-title"
    >
      {children}
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        onClick={onClose}
      >
        Close
      </button>
    </dialog>
  );
}
