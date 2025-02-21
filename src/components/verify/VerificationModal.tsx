import { IVerificationResponse } from '@/common/interfaces/IVerificationResponse';
import Modal from '../ui/Modal';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type Props = {
  address: string;
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  responseVerification: IVerificationResponse | undefined;
  setResponseVerification: (
    response: IVerificationResponse | undefined,
  ) => void;
  isLoading: boolean;
};

export default function VerificationModal({
  address,
  isModalOpen,
  setIsModalOpen,
  responseVerification,
  setResponseVerification,
  isLoading,
}: Props) {
  const router = useRouter();
  const [tryThis, setTryThis] = useState<Record<string, string>[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);
  const onContinue = () => {
    router.push(`/addresses/${address}?tab=contract`);
    setIsModalOpen(false);
  };
  useEffect(() => {
    if (responseVerification?.data.dataResponse.tryThis) {
      setTryThis(responseVerification?.data.dataResponse.tryThis);
    }
    if (responseVerification?.data.dataResponse.errors) {
      setError(
        responseVerification?.data.dataResponse.errors[0].formattedMessage,
      );
    }
  }, [
    responseVerification?.data.dataResponse.tryThis,
    responseVerification?.data.dataResponse.errors,
  ]);
  const close = () => {
    setError(undefined);
    setTryThis([]);
    setResponseVerification(undefined);
    setIsModalOpen(false);
  };
  return (
    <Modal isOpen={isModalOpen} onClose={close}>
      <div className=" w-[320px] flex flex-col justify-center items-center text-white">
        <h2 id="modal-title" className="text-2xl font-semibold mb-4">
          Verifying Contract
        </h2>

        <div className="flex items-center w-full justify-center mb-6 text-[10px]">
          <div className="flex flex-col items-center">
            <div className="w-[18px] h-[18px] flex items-center justify-center rounded-full bg-pink-500 text-black font-bold">
              1
            </div>
            <span className="mt-2 text-center">
              Sending Verification Request
            </span>
          </div>
          <div className="w-24 h-1 bg-gray-600 mx-2"></div>
          <div className="flex flex-col items-center">
            <div
              className={`w-[18px] h-[18px] flex items-center justify-center rounded-full font-bold ${
                responseVerification?.success
                  ? 'bg-pink-500 text-black'
                  : 'bg-gray-600 text-white'
              }`}
            >
              2
            </div>
            <span className="mt-2 text-center">Verification Result</span>
          </div>
        </div>

        {isLoading && (
          <div className="flex flex-col items-center">
            <div className="animate-spin h-12 w-12 border-4 border-gray-300 border-t-pink-500 rounded-full"></div>
          </div>
        )}
        {!isLoading && !responseVerification?.success && (
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500 text-white text-3xl">
                ✖
              </div>
              <div className="flex flex-col text-center">
                <span className="text-lg font-semibold text-red-400">
                  Verification Failed
                </span>
                <span className="text-gray-400 text-sm">Incorrect params</span>
              </div>
            </div>
            {(error || tryThis.length > 0) && (
              <div className="mt-4 p-3 bg-gray-800 rounded-lg text-white w-full max-w-[320px]">
                <span className="text-md font-semibold">
                  {error ? 'Error received:' : 'Try changing this:'}
                </span>
                <pre className="mt-2 text-sm bg-gray-900 p-2 rounded-md whitespace-pre-wrap break-words overflow-x-auto text-gray-300 max-w-full">
                  {error ?? JSON.stringify(tryThis, null, 2)}
                </pre>
              </div>
            )}
            <button
              className="mt-4 px-6 py-2 bg-pink-500 text-black font-bold rounded-lg hover:bg-pink-600 transition"
              onClick={close}
            >
              Retry
            </button>
          </div>
        )}
        {!isLoading && responseVerification?.success && (
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black text-3xl">
                ✔
              </div>
              <div className="flex flex-col text-center">
                <span className="text-lg font-semibold text-green-400">
                  Verified Successfully
                </span>
              </div>
            </div>
            <button
              className="mt-4 px-6 py-2 bg-pink-500 text-black font-bold rounded-lg hover:bg-pink-600 transition"
              onClick={onContinue}
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
}
