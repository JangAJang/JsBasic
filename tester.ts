const WORD_TYPE = {
    NOUN:"noun",
    VERB:"verb"
}

interface Word {
    getType():string;
    getWord():string;
}

class Words {

    private words:Word[]

    getWords():Word[] {
        return this.words;
    }

    getType():string {
        throw new Error("not extended!");
    }

    addWord(word:Word):void {
        this.words.push(word);
    }
}

class Noun implements Word {

    private word:string;

    constructor(word:string) {
        this.word = word;
    }

    getType() {
        return WORD_TYPE.NOUN;
    }

    getWord() {
        return this.word;
    }
}

class Verb implements Word {

    private word:string;

    constructor(word:string) {
        this.word = word;
    }

    getType() {
        return WORD_TYPE.VERB;
    }

    getWord() {
        return this.word;
    }
}

class Nouns extends Words {

    constructor(){
        super();
    }
    getType():string {
        return WORD_TYPE.NOUN;
    }
}

class Verbs extends Words {

    constructor(){
        super();
    }
    getType():string {
        return WORD_TYPE.VERB;
    }
}

class Sentence {

    nouns:Nouns
    verbs:Verbs

    constructor(inputString:string) {
        inputString.split(" ").forEach(words => {
            //띄어쓰기로 나눈 단어들을 의미에 따라 인스턴스 배열에 넣는다. 
        })
    }
}