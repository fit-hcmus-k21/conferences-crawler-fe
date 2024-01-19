// firebase.ts
import { getDatabase, ref, get } from 'firebase/database';

// Hàm này lấy toàn bộ dữ liệu từ node "conferences"
async function getAllConferenceData(): Promise<any[]> {
  const db = getDatabase();
  const conferencesRef = ref(db, 'conferences');
  const snapshot = await get(conferencesRef);

  const conferenceDataList: any[] = [];

  // Chuyển đổi dữ liệu từ snapshot thành mảng các object
  if (snapshot.exists()) {
    const data = snapshot.val();

    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        conferenceDataList.push(data[key]);
      }
    }
  }

  return conferenceDataList;
}

export default getAllConferenceData;
