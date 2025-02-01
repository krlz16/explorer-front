import { IVerificationResponse } from '@/common/interfaces/IVerificationResponse';
import Modal from '../ui/Modal';

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  responseVerification: IVerificationResponse | undefined;
  isLoading: boolean;
};

export default function VerificationModal({
  isModalOpen,
  setIsModalOpen,
  responseVerification,
  isLoading,
}: Props) {
  return (
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <h2 id="modal-title" className="text-lg font-semibold">
        Modal Title
      </h2>
      {isLoading && (
        <div className="flex flex-col items-center h-screen mt-40">
          <div className="animate-spin h-16 w-16 border-4 border-gray-300 border-t-brand-orange rounded-full motion-safe:animate-[spin_1.5s_linear_infinite]"></div>
          <span className="mt-4 text-white-400 text-lg font-medium opacity-0 transition-opacity duration-500 motion-safe:opacity-100">
            Verifying contract...
          </span>
        </div>
      )}
      <p className="text-gray-700 text-center">
        {responseVerification?.success ? 'Success' : 'Failed'}
      </p>
      <p className="text-gray-700 text-center">This is a sample modal.</p>
    </Modal>
  );
}
