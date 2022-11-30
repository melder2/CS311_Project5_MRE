const storySection = document.getElementById('completed-story');
const madLibsForm = document.getElementById('madlibs-form');

const submitMadLibs = (event) => {
    event.preventDefault();
    madLibsForm.classList.add('hide');

    const form = new FormData(event.target);
    const userSubmission = Object.fromEntries(form);

    const story = `<h2>Your completed mad lib: </h2>
    <p>Where can you meet a nice, normal <strong><u>${userSubmission.pronoun}</u></strong> to date? Sure, there are traditional<br> avenues like the workplace or (the) <strong><u>${userSubmission.place}</u></strong>, but here are some other creative, <strong><u>${userSubmission.adjective}</u></strong> ways: <br>
    Show off your athletic skills by joining a/an <strong><u>${userSubmission.sport}</u></strong> team at a rec center.<br>
    Walk your favorite four-legged <strong><u>${userSubmission.pet}</u></strong> at the local <strong><u>${userSubmission.pet1}</u></strong> park.<br> 
    Attend a/an <strong><u>${userSubmission.schoolSubject}</u></strong> class at a community college.<br>
    Look for antique <strong><u>${userSubmission.antique}</u></strong> for your collection at a flea market.<br> 
    <strong><u>${userSubmission.verb}</u></strong> with hundreds of other crazy <strong><u>${userSubmission.pluralNoun}</u></strong> as part of a flash mob.<p>
    `;  
    storySection.innerHTML += story;
    storySection.classList.remove('hide');
}














