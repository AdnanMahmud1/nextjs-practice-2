interface NewsList {
  Data: News[];
}
interface News {
  HeadNewsId: number;
  FacultyProfileId: null;
  HeadNewsTypeId: number;
  Title: string;
  Description: null;
  WebCode: string;
  Image: string;
  Url: string;
  UrlSec: null;
  StartDate: Date;
  ExpireDate: Date;
  IsImportant: boolean;
  DisplaySequence: number;
  IsVisible: boolean;
  IsDisable: boolean;
  FacultyProfile: null;
  HeadNewsType: HeadNewsType;
  EntryDate: Date;
}
interface HeadNewsType {
  HeadNewsTypeId: number;
  Name: string;
  IsVisible: boolean;
  Description: null;
  Sequence: number;
  EntryDate: Date;
  UpdateDate: Date;
  Remarks: null;
  EntryBy: null;
  SystemRole: null;
  PcIp: null;
  IsDeleted: boolean;
}

const NewsPage = async () => {
  const res = await fetch(
    "https://cluster-1.buet.ac.bd/cacheApi/news/landing",
    {
      cache: "no-store",
    }
  );

  const newsList: NewsList = await res.json();
  return (
    <>
      <h1>Buet News List</h1>
      <div className="grid grid-cols-3 gap-7">
        {newsList.Data.map((obj) => (
          <div
            key={obj.HeadNewsId}
            className="card card-compact w-96 bg-base-100 shadow-xl"
          >
            <figure>
              <img
                src={`https://www.buet.ac.bd/service/api/FileServiceNews/LoadImage?imagePath=${obj.Image}&amp;type=1712045294457&amp;stamp=1`}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">News</h2>
              <p>{obj.Title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewsPage;
