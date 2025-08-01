import React, { useState } from "react";
import "../Styles/about.scss";
import Button from "react-bootstrap/Button";

const About = () => {
  const [language, setLanguage] = useState(false);

  const handleLanguageSwitch = () => {
    setLanguage(!language);
  };

  return (
    <div id="about">
      <div className="section-title" data-aos="fade-up">
        <h3>About</h3>
      </div>

      <div className="about-page">
        {/* <h4 className="sec-title">
          {!language ? "About Voice of Chenduraan" : "செந்தூரான் குரல்"}
        </h4> */}
        <h2>
          {!language
            ? "About Voice of Chenduraan"
            : "செந்தூரான் குரல் – யூனிவர்சல் ஒருங்கிணைந்த சிகிச்சை மையம் பற்றி"}
        </h2>
        {!language ? (
          <p>
            “Healing the Inner Core, Balancing Body and Mind”—this is not just a
            motto but the first firm step toward a healthier world. Voice of
            Chenduraan – Univercel Integrated Therapy Centre is born from the
            vision to blend traditional healing wisdom with modern holistic
            practices, making age-old therapies accessible, effective, and
            relevant in today's world. <br />
            This centre serves as a sanctuary for individuals seeking natural,
            non-invasive, and integrative healing. At its foundation is a
            revival of ancient Indian therapeutic systems—particularly rooted in
            Siddha medicine, Varma therapy, and indigenous energy
            sciences—reimagined through the lens of science and structured
            therapeutic care. <br />
            The centre offers a wide array of treatments, including Indian
            Medicine, Varma Therapy, Auricular Therapy, Cupping Therapy,
            Magnetic Therapy, Foot Reflexology, Seed Therapy, Acupressure
            Therapy, Hypnotherapy, Neuro Therapy, Chiro Therapy, Medicated Oil
            Massage, Yoga Therapy, and Mudra Therapy. These therapies are
            applied systematically based on the individual’s health condition,
            body constitution, and energy flow. <br />
            Our approach focuses on healing a broad spectrum of conditions such
            as chronic headaches, sinusitis, musculoskeletal disorders, joint
            pain, facial palsy, paralysis, neurological imbalances, insomnia,
            and post-operative recovery. We combine therapeutic techniques with
            lifestyle correction, nutritional guidance, and emotional balance,
            ensuring a comprehensive healing experience. <br />
            Every patient’s journey begins with pre-registration, enabling us to
            provide personalized care and attention without compromise. The
            centre prioritizes accurate diagnosis, clear documentation,
            experienced hands, and empathetic service, holding the patient’s
            well-being above all else. <br />
            Voice of Chenduraan is more than a therapy centre—it is a mission to
            preserve and evolve India’s ancient medical heritage through
            scientific application and soulful care. It stands as a bridge
            between the traditional and the modern, the mystical and the
            medical, offering true healing in its most holistic form. <br />
            With unwavering commitment to healing, knowledge, and care, Voice of
            Chenduraan – Univercel Integrated Therapy Centre continues its
            journey toward transforming lives—one person, one therapy at a time.{" "}
            <Button onClick={() => handleLanguageSwitch()}>
              Switch to {!language ? "தமிழ்" : "English"}
            </Button>
          </p>
        ) : (
          <p>
            “உணர்ச்சிகளுக்குள் ஆழ்ந்து, உடல் மற்றும் மனதின் சமநிலையை
            உருவாக்குவது”—இது வெறும் குறிக்கோள் அல்ல; அது ஒரு ஆரோக்கியமான
            உலகத்திற்கு எடுக்கப்படும் முதல் நம்பிக்கையுள்ள ஒரு படியே. Voice of
            Chenduraan – Univercel Integrated Therapy Centre எனும் மையம்,
            பாரம்பரியத்தின் ஆழ்ந்த மருத்துவ ஞானத்தை, நவீன அறிவியல்
            அணுகுமுறையுடன் இணைத்து, அனைவருக்கும் எளிமையாகவும், விள க்கமாகவும்
            கொண்டு செல்லும் ஒரு தீர்க்கத் திட்டத்தின் வெளிப்பாடு. <br />
            இது இயற்கை வழி சிகிச்சையை நாடும் ஒவ்வொருவருக்கும் ஒரு பாதுகாப்பான
            இடமாக அமைந்துள்ளது. சித்த மருத்துவம், வர்ம சிகிச்சை, பண்டைய இந்திய
            புனித மருத்துவ நுண்ணறிவுகள் போன்றவைகளை மையமாகக் கொண்டு, அவற்றை நவீன
            விஞ்ஞான அறிவு, ஆய்வுகள் மற்றும் சிகிச்சைப் பார்வையில் கொண்டு
            வருகிறது. <br />
            இங்கு வழங்கப்படும் சிகிச்சைகள்: இந்திய மருந்து, வர்ம சிகிச்சை, காது
            புள்ளி சிகிச்சை, கப்பிங் சிகிச்சை, காந்த சிகிச்சை, காலடிப் புள்ளி
            சிகிச்சை, விதை சிகிச்சை, அக்குபிரசர் சிகிச்சை, ஹைப்‌னோ சிகிச்சை,
            நரம்பியல் சிகிச்சை, கை சிகிச்சை, நெய் மசாஜ், யோகா சிகிச்சை மற்றும்
            முத்திரை சிகிச்சை உள்ளிட்ட பலவகை பாகப்பிரிக்கப்பட்ட சிகிச்சைகள்
            வழங்கப்படுகின்றன. <br />
            இந்த மையம், பின்வரும் பிரச்சனைகளுக்கு தீர்வு அளிக்கிறது: தலைவலி,
            சைனஸ்கள், கழுத்து மற்றும் முதுகுவலி, மூட்டுவலி, நரம்பு கோளாறுகள்,
            ஊனமுற்ற நோய்கள், தூக்கமின்மை, மற்றும் அறுவை சிகிச்சைக்குப் பின்
            மறுசுழற்சி சிகிச்சைகள். இவை அனைத்துக்கும் உடல்நல வழிகாட்டுதல்,
            உணவுமுறை ஆலோசனை மற்றும் வாழ்க்கைமுறை மாற்றங்கள் உடன் இணைந்து
            சிகிச்சை அளிக்கப்படுகிறது. <br />
            முன்பதிவு அடிப்படையில் மட்டும் நியமனங்கள் ஒப்படைக்கப்படுவதால்,
            ஒவ்வொருவருக்கும் தனிப்பட்ட கவனமும், நேரமும் வழங்கப்படும். நியாயமான
            பரிசோதனைகள், தெளிவான ஆவணமாக்கம், அனுபவமிக்க சிகிச்சையாளர் கவனிப்பு,
            மற்றும் முழுமையான கருணையுடன் நோயாளிகளுக்கு நலன்கள் வழங்கப்படுகின்றன.{" "}
            <br />
            Voice of Chenduraan என்பது வெறும் சிகிச்சை மையமல்ல—அது பாரம்பரிய
            இந்திய மருத்துவக் கலைவழிகளைக் கல்வி, அறிவியல் மற்றும் ஆராய்ச்சி
            மூலமாக புதிய தலைமுறைக்கும் பரிமாறும் ஒரு இயக்கம். இது மரபையும்,
            நவீனத்தையும் இணைக்கும் ஒரு பாலமாக செயல்படுகிறது. <br />
            சரியான சிகிச்சை, உண்மை அக்கறை மற்றும் நிரந்தர நலமென்னும் இலக்குடன்,
            Voice of Chenduraan – Univercel Integrated Therapy Centre தொடர்ந்து
            பலரது வாழ்க்கையிலும் மாற்றங்களை ஏற்படுத்தி வருகிறது—ஒருவராக ஒருவர்,
            ஒரு சிகிச்சையாய் முற்றிலும். <br />
            <Button onClick={() => handleLanguageSwitch()}>
              Switch to {!language ? "தமிழ்" : "English"}
            </Button>
          </p>
        )}
      </div>
    </div>
  );
};

export default About;
