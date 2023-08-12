import { useEffect, useRef } from 'react';

const Matrix = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const str =
      "! # $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [  ] ^ _ ` a b c d e f g h i j k l m n o p q r s t u v w x y z { | } ~ あ い う え お か き く け こ さ し す せ そ た ち つ て と な に ぬ ね の は ひ ふ へ ほ ま み む め も や ゆ よ ら り る れ ろ わ を ん ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅅ ㅇ ㅈ ㅊ ㅋ ㅌ ㅍ ㅎ ㅏ ㅑ ㅓ ㅕ ㅗ ㅛ ㅜ ㅠ ㅡ ㅣ А Б В Г Д Е Ж З И Й К Л М Н О П Р С Т У Ф Х Ц Ч Ш Щ Ъ Ы Ь Э Ю Я";
    const matrix = str.split('');
    const font = 12;
    const col = width / font;
    const arr = [];

    for (let i = 0; i < col; i++) {
      arr[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0,0,0,0.05)';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = '#00FF00';
      ctx.font = `${font}px system-ui`;

      for (let i = 0; i < arr.length; i++) {
        let txt = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(txt, i * font, arr[i] * font);

        if (arr[i] * font > height && Math.random() > 0.975) {
          arr[i] = 0;
        }
        arr[i]++;
      }
    };

    const interval = setInterval(draw, 20);

    return () => clearInterval(interval);
  }, []);

  return <canvas ref={canvasRef} style={{ display: 'block' }} />;
};

export default Matrix;
