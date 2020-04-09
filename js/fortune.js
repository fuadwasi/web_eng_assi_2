var fort = document.getElementById('fort')
var b1 = document.getElementById('btn')
let quotes = [
    'If you want to achieve greatness stop asking for permission.',
    'Things work out best for those who make the best of how things work out.',
    'To live a creative life, we must lose our fear of being wrong.',
    'If you are not willing to risk the usual you will have to settle for the ordinary.',
    'Trust because you are willing to accept the risk, not because it is safe or certain.',
    'Take up one idea. Make that one idea your life--think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.',
    'All our dreams can come true if we have the courage to pursue them.',
    'Good things come to people who wait, but better things come to those who go out and get them.',
    'If you do what you always did, you will get what you always got.',
    'Success is walking from failure to failure with no loss of enthusiasm.',
    'Just when the caterpillar thought the world was ending, he turned into a butterfly',
    'Successful entrepreneurs are givers and not takers of positive energy',
    'Whenever you see a successful person you only see the public glories, never the private sacrifices toreach them',
    'Opportunities donot happen, you create them',
    'Try not to become a person of success, but rather try to become a person of value',
    'Great minds discuss ideas; average minds discuss events; small minds discuss people.',
    'I have not failed. I haveve just found 10,000 ways that will not work.',
    'If you do not value your time, neither will others. Stop giving away your time and talents--startcharging for it.'
    ]

b1.addEventListener('click', (e) => {
  e.preventDefault()
  fort.value = quotes[Math.floor(Math.random() * (18) )];
})