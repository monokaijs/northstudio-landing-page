import React, {useEffect, useRef, useState} from "react";
import styles from "./sections.module.scss";
import SectionTitle from "@/components/shared/SectionTitle";
import StoryCarousel from "@/components/carousels/StoryCarousel";
import Story01 from "@/assets/figures/story-01.jpg";
import Story02 from "@/assets/figures/story-02.jpg";

const Slides = [{
  image: Story01.src,
  date: "MAY, 2023",
  title: <>
    <h3>
      Câu chuyện về Con người
    </h3>
    <span>NorthStudio' Story</span>
  </>,
  content: <>
    <p>
      Được thành lập cuối năm 2020, NorthStudio hình thành bởi một khát vọng mang lại những giá trị thực tiễn từ lòng
      nhiệt huyết, tinh thần trẻ và những đôi tay trẻ của những con người trẻ. Thời điểm mới thành lập, đội ngũ của
      “Những kẻ hướng về Phương Bắc” mới chỉ mười tám, mười chín tuổi, là những kẻ ngông cuồng tìm lấy cho mình một con
      đường đổi đời, một con đường mà ở đó những ý tưởng ấp ủ, những ước mơ được hoá thành hiện thực.
    </p>
    <p>
      Ở đây, chúng tôi không chỉ có những con người đang làm việc, đang hướng tới work-life-balance, chúng tôi có những
      con người sống được cùng công việc và biến được công việc trở thành một phần thú vị của cuộc sống. Vì, chúng tôi
      quan niệm rằng cuộc sống sẽ thật là vô nghĩa nếu không có công việc, không có những sự cống hiến và cuộc đời sẽ
      thật là vô ích nếu như không mang lại giá trị gì cho xã hội bên ngoài.
    </p>
  </>
}, {
  image: Story02.src,
  date: "DEC, 2020",
  title: <>
    <h3>
      Câu chuyện Sản phẩm
    </h3>
    <span>NorthStudio' Story</span>
  </>,
  content: <>
    <p>
      Được sinh ra bởi những dự án cộng đồng, giá trị của NorthStudio được tạo dựng bởi những gì chúng tôi cống hiến,
      những sản phẩm tạo ra những đóng góp thực tế cho người dùng, cho xã hội.
    </p>
    <p>
      Ở NorthStudio, điều tiên quyết khi định hướng về những dự án, những sản phẩm và những tính năng, chúng tôi đều đề
      cao tính ứng dụng từ giai đoạn hình thành ý tưởng. Những sản phẩm của NorthStudio được lấy cảm hứng từ bất kỳ điều
      gì trong cuộc sống của một con người bình thường, từ việc ăn uống, học tập lẫn giao tiếp xã hội.
    </p>
    <p>
      Chúng tôi tin rằng với những bộ óc kỳ quặc sống trong một đời sống tầm thường cùng những tấm lòng sôi sục khát
      vọng cống hiến, những sản phẩm hữu ích sẽ được tạo ra.
    </p>
    <p style={{fontStyle: "italic"}}>
      "Không cần phải cao siêu, miễn là hoàn thiện và hữu dụng."
    </p>
  </>
}]

export default function Story() {
  const [activated, setActivated] = useState(false);
  const [index, setIndex] = useState(0);
  const outerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.addEventListener('scroll', e => {
      if (outerRef.current?.offsetTop && outerRef.current?.offsetTop - window.scrollY < 300) {
        setActivated(true);
      }
    });
  }, []);

  return <div
    ref={outerRef}
    id={'story'}
    className={styles.section}
  >
    <div className={styles.sectionContent}>
      <SectionTitle>
        Our Story
      </SectionTitle>
      <div>
        Story of a journey...
      </div>

      <StoryCarousel
        slides={Slides}
        index={index}
        date={Slides[index].date}
        activated={activated} image={Slides[index].image}
        onNext={() => setIndex(i => i + 1)}
        onPrev={() => setIndex(i => i - 1)}
        canGoNext={index < Slides.length - 1}
        canGoPrev={index > 0}
      />
      {activated && (
        <div className={styles.storyText} key={index}>
          <div className={`${styles.storyTextContent}`}>
            {Slides[index].content}
          </div>
          <div className={`${styles.storyTextTitle}`}>
            {Slides[index].title}
          </div>
        </div>
      )}

    </div>
  </div>
}
