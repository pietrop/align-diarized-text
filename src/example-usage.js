const fs = require('fs');
const path = require('path');
const main = require('./index.js');


const debates = [{
        debateName: 'Debate-June-26',
        csvFileInputName: './debates-quotes-csv/debate_quotes - 26th.tsv',
        debateSTTWords: require('../debates/Democratic Presidential Debate - June 26 (Full) | NBC News/assemblyai-transcript.json'),
        audioUrl: "https://democratic-presidential-debate-stt-analyses.s3.us-east-2.amazonaws.com/_-vJ6MrDO0kgY.mp4",
        debateTitle: "NBC NEWS HOLDS DEMOCRATIC PRESIDENTIAL CANDIDATES DEBATE"
    },
    {
        debateName: 'Debate-June-27',
        csvFileInputName: './debates-quotes-csv/debate_quotes - 27th.tsv',
        debateSTTWords: require(`../debates/Democratic Presidential Debate - June 27 (Full) | NBC News/pocketsphinx-transcript.json`),
        audioUrl: "https://democratic-presidential-debate-stt-analyses.s3.us-east-2.amazonaws.com/_-cX7hni-zGD8-trimmed-debate-only.mp4",
        debateTitle: "NBC NEWS HOLDS DEMOCRATIC PRESIDENTIAL CANDIDATES DEBATE"
    },
    // 30th Jul needs to be transcribed first. `npm run start:transcribe`
    {
        debateName: 'Debate-July-30th',
        csvFileInputName: './debates-quotes-csv/debate_quotes - 30th.tsv',
        debateSTTWords: require(`../debates/Democratic Presidential Debate - July 30 | CNN/pocketsphinx-transcript.json`),
        audioUrl: "https://democratic-presidential-debate-stt-analyses.s3.us-east-2.amazonaws.com/FULL+2nd+Democratic+debate+30+July+2019+(Night+1)-neVtNFPTsiQ.mp4",
        debateTitle: "CNN HOSTS 2020 DEMOCRATIC PRESIDENTIAL DEBATES IN DETROIT, NIGHT 1"
    },
    {
        debateName: 'Debate-July-31st',
        csvFileInputName: './debates-quotes-csv/debate_quotes - 31st.tsv',
        debateSTTWords: require(`../debates/Democratic Presidential Debate - July 31 | CNN/pocketsphinx-transcript.json`),
        audioUrl: "https://democratic-presidential-debate-stt-analyses.s3.us-east-2.amazonaws.com/CNN+Democratic+Presidential+Debate+Jul+31%2C2019-vW3iUWIChfs-trimmed.mp4",
        debateTitle: "CNN HOLDS DEMOCRATIC PRESIDENTIAL CANDIDATES DEBATE"
    },
    {
        debateName: 'Debate-Sept-12nd',
        csvFileInputName: './debates-quotes-csv/debate_quotes - 09-12nd.tsv',
        debateSTTWords: require(`../debates/ABC News Democratic Debate - WATCH THE FULL DEBATE (2019)/pocketsphinx-transcript.json`),
        audioUrl: "https://democratic-presidential-debate-stt-analyses.s3.us-east-2.amazonaws.com/ABC+News+Democratic+Debate+-+WATCH+THE+FULL+DEBATE+(2019)-2UWVO0Trd1c-trimmed.mp4",
        debateTitle: "ABC HOSTS 2019 DEMOCRATIC PRESIDENTIAL CANDIDATES DEBATES IN HOUSTON"
    }
]

debates.forEach(({ debateName, csvFileInputName, debateSTTWords, audioUrl, debateTitle }) => {
    const { timecodedQuotes, htmlPagePreview } = main(csvFileInputName, debateSTTWords, debateTitle, audioUrl);
    const timecodedQuotesFilePath = path.join('./timed-quotes-output', `${debateName}.json`)
    fs.writeFileSync(timecodedQuotesFilePath, JSON.stringify(timecodedQuotes, null, 2));
    fs.writeFileSync(`./public/${debateName}.html`, htmlPagePreview);
})