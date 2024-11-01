import { useParams } from "next/navigation";
import TrackPreview from "../components/TrackPreview";

export default function TrackPage() {
  const { trackId } = useParams();

  // Kiểm tra nếu trackId là một mảng thì lấy phần tử đầu tiên, nếu không giữ nguyên
  const id = Array.isArray(trackId) ? trackId[0] : trackId;

  return (
    <div>
      <h1>Track Page</h1>
      {/* Truyền trackId tự động vào TrackPreview */}
      {id ? <TrackPreview trackId={id} /> : <div>No trackId found</div>}
    </div>
  );
}
