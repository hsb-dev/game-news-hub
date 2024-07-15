import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Seoul");

export default function NewsItem({ news, onClickNews, dotColor }) {
  return (
    <a
      className="contents-card"
      href={news.link}
      key={news.id}
      target="_blank"
      rel="noreferrer"
      onClick={() => onClickNews(news.id)}
    >
      <div
        className="content-img"
        style={{
          backgroundImage: `url("${process.env.REACT_APP_API_URL}/image?url=${news.thumbnailUrl}")`,
        }}
      >
        {news.description && (
          <div className="contents-over-bg">
            <div className="contents-bg-dummy"></div>
            <div className="contents-subtext">
              <p>{news.description}</p>
            </div>
          </div>
        )}
      </div>

      <div className="contents-tags">
        <div className="contents-tag">게임토픽</div>
      </div>
      <div className="contents-title">{news.title}</div>

      <div className="contents-info">
        <div className="contents-info-pubname">
          <div
            className="contents-info-pubdot"
            style={{ backgroundColor: dotColor }}
          ></div>
          {news.publisher}
        </div>
        <div className="contents-info-dates">
          {dayjs(news.date).format("YY.MM.DD HH:mm")}
        </div>
      </div>
    </a>
  );
}
