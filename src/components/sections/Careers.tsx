import styles from "./sections.module.scss";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import CareerItem from "@/components/sections/CareerItem";

const Positions = [{
  id: '0',
  title: 'Frontend Developer (React.Js)',
  slots: 1,
  description: `We're finding React.Js Developer to work on our products. Our team planning to create a social network platform based on decentralized technologies.`,
  location: 'Hanoi, Ho Chi Minh City',
  salaryRange: '$600 - $1200'
}, {
  id: '1',
  title: 'Backend Developer (Node.Js, NestJs)',
  slots: 1,
  description: `We're finding NestJs Developer to work on our products. Our team planning to create a social network platform based on decentralized technologies.`,
  location: 'Hanoi',
  salaryRange: '$800 - $1400'
}, {
  id: '2',
  title: 'Mobile Developer (ReactNative)',
  slots: 1,
  description: `We're finding ReactNative Developer to work with our utility apps that serving million of our users.`,
  location: 'Hanoi',
  salaryRange: '$800 - $1400'
}, {
  id: '3',
  title: 'Human Resources Specialist',
  slots: 1,
  description: `We're finding A human resource specialist to handle internal activities and do recruiting works.`,
  location: 'Hanoi',
  salaryRange: '$500 - $800'
}]

export default function Careers() {
  return <div
    className={styles.section} id={'career'}
  >
    <div className={styles.sectionContent}>
      <SectionTitle>
        Be our teammates
      </SectionTitle>
      <div>
        Work with us, in a highly motivated environment. We're looking for:
      </div>

      {Positions.map(pos => (
        <CareerItem
          key={pos.id}
          title={pos.title}
          description={pos.description}
          location={pos.location}
          salaryRange={pos.salaryRange}
        />
      ))}
    </div>
  </div>
}
