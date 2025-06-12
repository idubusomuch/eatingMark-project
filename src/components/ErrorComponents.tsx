import { Link } from 'react-router-dom';

type StatusMessageProps = {
  message: string;
};

export default function ErrorComponents({ message }: StatusMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] text-gray-600 text-center">
      <div className="text-center py-10 text-gray-500 text-lg">{message}</div>
    </div>
  );
}

export function ErrorFallback() {
  return (
    <ErrorComponents message="데이터를 불러오는 중 오류가 발생했습니다." />
  );
}

export function EmptyResult() {
  return <ErrorComponents message="표시할 데이터가 없습니다." />;
}

export function LocationError() {
  return <ErrorComponents message="위치 정보를 받아오지 못했습니다." />;
}

export function PageNotFound() {
  return (
    <div className="text-center">
      <ErrorComponents message="404 - 페이지를 찾을 수 없습니다." />
      <button className="bg-[#111] text-white py-3 px-5 rounded-lg">
        <Link to="/">메인 화면으로 돌아가기</Link>
      </button>
    </div>
  );
}
