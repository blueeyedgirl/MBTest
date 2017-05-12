import React from 'react';
import ReactDOM from 'react-dom';

export default class MainAbout extends React.Component {
    render() {
        return  <div>
                    <p>
                        Test Myers-Briggs (MBTI) jest testem psychologicznym, określającym typ osobowości. Bazuje na obserwacji Carla Gustava Junga, że ludzie posiadają preferencje w zakresie metod zbierania informacji, podejmowania decyzji, kierowania swojej energii oraz "ładowania akumulatorów".
                    </p>
                    <div>
                        <p className="span-center nomargin"><b>Pamiętaj:</b></p>
                        <ul>
                            <li><p className="nomargin">zaznaczaj odpowiedzi, z którymi bardziej się zgadzasz</p></li>
                            <li><p className="nomargin">niektóre pytanie mogą wydać Ci się źle sformułowane - nie przejmuj się tym</p></li>
                            <li><p className="nomargin">nie zastanawiaj się długo nad odpowiedzią, zaufaj intuicji</p></li>
                        </ul>
                    </div>
                </div>;
    }
};
