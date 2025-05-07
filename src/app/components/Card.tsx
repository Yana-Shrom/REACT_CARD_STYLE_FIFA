'use client';
import React, { useState } from 'react';
import styles from './Card.module.css';

interface CardProps {
  frontImage: string;
  backStats: {
    speed: number;
    shoot: number;
    pass: number;
    handling: number;
    defense: number;
    physical: number;
  };
  playerFName: string;
  playerLName: string;
  overall: number;
  position: string;
  nationFlag: string;
  clubLogo: string;
}
const Card: React.FC<CardProps> = ({
  frontImage,
  backStats,
  playerFName,
  playerLName,
  overall,
  position,
  nationFlag,
  clubLogo,
}) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className={styles.cardContainer} onClick={() => setFlipped(!flipped)}>
      <div className={`${styles.card} ${flipped ? styles.flipped : ''}`}>
        <div className={styles.front}>
          <div className="absolute top-18 left-8 flex flex-col justify-center items-center z-10">
            <span className="text-3xl bg-black/50 rounded-full p-2 ">{overall}</span>
            <span className="text-l">{position}</span>
            <img src={nationFlag} className="w-10" alt="nation" />
            <img src={clubLogo} className="min-w-15 max-w-15 p-1 min-h-10 max-h-15 rounded-full" alt="club" />
          </div>
          <img src={frontImage} alt={playerFName} className="absolute transform -translate-1/2 top-[40%] left-1/2 bg-cover min-w-50 max-w-50 min-h-60 max-h-60 z-0" />
          <div className="absolute bottom-18 flex flex-col justify-center items-center w-60 rounded-t-[30px] rounded-b-[20px] bg-gradient-to-b from-transparent via-amber-200 to-transparent via-20%">
            <div>
              <h2 className="flex flex-col text-center">
                <span className="text-sm">{playerFName}</span>
                <span className="text-xl">{playerLName}</span>
              </h2>
            </div>
            <div className="flex flex-row gap-10">
              <ul className="flex flex-col">
                <li>SPD: {backStats.speed}</li>
                <li>SHO: {backStats.shoot}</li>
                <li>PAS: {backStats.pass}</li>
              </ul>
              <ul>
                <li>HND: {backStats.handling}</li>
                <li>DEF: {backStats.defense}</li>
                <li>PHY: {backStats.physical}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.back}>
          <ul>
            <li>SPD: {backStats.speed}</li>
            <li>SHO: {backStats.shoot}</li>
            <li>PAS: {backStats.pass}</li>
            <li>HND: {backStats.handling}</li>
            <li>DEF: {backStats.defense}</li>
            <li>PHY: {backStats.physical}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Card;