import React from "react";
import styles from "./sections.module.scss";
import SectionTitle from "@/components/shared/SectionTitle";
import StoryCarousel from "@/components/carousels/StoryCarousel";

export default function Story() {
  return <div id={'story'} className={styles.section}>
    <div className={styles.sectionContent}>
      <SectionTitle>
        Our Story
      </SectionTitle>
      <div>
        Story of a journey...
      </div>

      <StoryCarousel/>

      <div className={styles.storyText}>
        <div className={styles.storyTextContent}>
          <p>
            Được thành lập cuối năm 2020, NorthStudio hình thành bởi một khát vọng mang lại những giá trị thực tiễn từ lòng nhiệt huyết, tinh thần trẻ và những đôi tay trẻ của những con người trẻ. Thời điểm mới thành lập, đội ngũ của “Những kẻ hướng về Phương Bắc” mới chỉ mười tám, mười chín tuổi, là những kẻ ngông cuồng tìm lấy cho mình một con đường đổi đời, một con đường mà ở đó những ý tưởng ấp ủ, những ước mơ được hoá thành hiện thực.
          </p>

          <p>
            Ở đây, chúng tôi không chỉ có những con người đang làm việc, đang hướng tới work-life-balance, chúng tôi có những con người sống được cùng công việc và biến được công việc trở thành một phần thú vị của cuộc sống. Vì, chúng tôi quan niệm rằng cuộc sống sẽ thật là vô nghĩa nếu không có công việc, không có những sự cống hiến và cuộc đời sẽ thật là vô ích nếu như không mang lại giá trị gì cho xã hội bên ngoài.
          </p>
        </div>
        <div className={styles.storyTextTitle}>
          <h3>
            Câu chuyện về Con người
          </h3>
          <span>
            NorthStudio' Story
          </span>
        </div>

      </div>

    </div>
  </div>
}
