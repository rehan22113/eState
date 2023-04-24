import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import React,{Fragment} from 'react'
import { Popover,Transition } from '@headlessui/react'



const language = [{
  lang:"en",
  flag:"🇬🇧",
  headText:'Save and invest in international Real Estate',
  headText1:' with crypto',
  register:"Register",
  community:'Join the community',
  what:'What is Estate Protocol?',
  team:'Team',
  partner:'Partners',
  topheading:"Introducing Estate Protocol: We facilitate fractional ownership in prime properties located in economically stable countries, providing people anywhere the benefits of co-ownership and diversifying their investments, all using cryptocurrencies. Estate Protocol's sophisticated real estate tokenization platform bridges access to real world assets into the digital world through blockchain, empowering the global investor."
},
{
  lang:"sp",
  flag:"🇪🇸",
  headText:'Ahorre e invierta en Bienes Raíces internacionales',
  headText1:' con cripto',
  register:"Registro",
  community:'Unete a la communidad',
  what:'¿Qué es el Protocolo Patrimonial?',
  team:'equipo',
  partner:'Socias',
  topheading:"Presentamos Estate Protocol: Facilitamos la propiedad fraccionada en propiedades de primer nivel ubicadas en países económicamente estables, brindando a personas de cualquier lugar los beneficios de la copropiedad y la diversificación de sus inversiones, todo utilizando criptomonedas. La sofisticada plataforma de tokenización de bienes raíces de Estate Protocol establece un puente de acceso a activos del mundo real en el mundo digital a través de la cadena de bloques, empoderando al inversor global."
},
{
  lang:"tr",
  flag:"🇹🇷",
  headText:'Tasarruf edin ve uluslararası Gayrimenkule yatırım yapın',
  headText1:' kripto ile',
  register:"Kayıt olmak",
  community:'Topluluğa katıl',
  what:'Emlak Protokolü nedir?',
  team:'Takım',
  partner:'Ortaklar',
  topheading:"Estate Protocol'ü tanıtıyoruz: Ekonomik olarak istikrarlı ülkelerde bulunan birinci sınıf mülklerde kesirli mülkiyeti kolaylaştırırız, böylece dünyanın her yerindeki insanlara ortak mülkiyetin faydalarını ve yatırımlarını çeşitlendirmeyi sunarız, tüm bunlar kripto paralar kullanarak gerçekleştirilir. Estate Protocol'ün sofistike gayrimenkul tokenleştirme platformu, dünya çapındaki yatırımcıları güçlendiren blockchain üzerinden gerçek dünya varlıklarına dijital dünyada erişimi sağlar."
}]

const Home = () => {

  const [lang,setLang] = React.useState(language[0])

  const HandleLanguage = (e)=>{
      language.map((lang)=>{
        if(e.flag == lang.flag ){
          // console.log([lang])
          setLang(lang)
        }
      })
  }
  return (
   <>

   <div className=''>
   <header className="text-gray-600 body-font md:border border-black bg-[#C7CEEA] overflow-hidden ">
  <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center w-[80%] ">
  <div className=' md:border-r border-black md:w-40 p-5'>

    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img className='w-[3.63rem] h-[3.63rem] object-cover' src="/download-10-1@2x.png" alt="" srcSet="" />
    </a>
  </div>
    
  <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
    <Link href="/#" className="mr-5 hover:text-gray-900">Home</Link>
    <Link href="/#about" className="mr-5 hover:text-gray-900">About</Link>
    <Link href="/#contact" className="mr-5 hover:text-gray-900">Contact</Link>
    {/* <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
  </nav>
  <div className='flex md:space-x-3 space-x-5'>
  <a href='https://verify-with.blockpass.org/?clientId=estate_protocol_1_fd4bb&serviceName=Estate%20Protocol&env=prod'>
  <button className="btn inline-flex items-center bg-[#FF9AA2] border-1 py-2 px-8 focus:outline-none hover:bg-gray-200 text-base text-white mt-4 md:mt-0">
  <span className='text-xl'>{lang.register}</span>
  </button>
    </a>
  <Popover>
      {({ open,close }) => (
        /* Use the `open` state to conditionally change the direction of the chevron icon. */
        <>
          <Popover.Button className="focus-visible:ring-orange-500">
          <div className='btn inline-flex items-center bg-transparent border-1 border-black pt-0 pb-2 px-6 focus:outline-none hover:bg-[#FF9AA2] text-base mt-4 md:mt-0'>
            <span className='text-3xl cursor-pointer'>{lang.flag}</span>
          </div>
            {/* <ChevronDownIcon className={open ? 'rotate-180 transform' : ''} /> */}
          </Popover.Button>
          <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute md:left-[87%] left-[70%] z-10 mt-3 w-screen max-w-[8rem] -translate-x-1/2 transform px-2 sm:px-0 lg:max-w-[5rem]">
                <div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative flex flex-col bg-white p-1">
                 
          
                    {language.map((item) => (
                      
                        
                        <div key={item.lang} onClick={()=>{HandleLanguage(item);close()}} className="cursor-pointer">
                       
                          <p data-headlessui-state="close" className="text-4xl text-center font-medium text-gray-900">
                            {item?.flag}
                          </p>
                       
                         
                        </div>
                      
                    ))}
                 
                    
                  </div>
                 
                </div>
              </Popover.Panel>
            </Transition>
        </>
      )}
    </Popover>

    
    
  </div>

  </div>
</header>
<section className="text-gray-600 body-font bg-[#C7CEEA] overflow-hidden">
  <div className=' relative z-10 top-72'>
    <img src='/zig-zag.svg' className='w-32'/>
   </div>
   <div className=' relative z-0 top-[34rem] left-[50%] overflow-hidden'>
    <img src='/zig-zag.svg' className='w-32'/>
   </div>
   {/* <div className=' relative z-10 top-[10rem] right-0'>
    <img src='/zig-zag.svg' className='w-32'/>
   </div> */}
  <div className="container mx-auto flex px-5 md:flex-row flex-col items-center  md:w-[80%] w-[90%]">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 lg:py-0 py-10  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font lg:text-8xl md:text-6xl text-5xl mb-4 font-medium text-gray-900 top-text ">{lang.headText} 
        <span className=" text-white " ><br className='md:hidden '/>{lang.headText1}</span>
      </h1>
     
      <div className="flex justify-center py-10">
      <a href="https://estateprotocol.gitbook.io/whitepaper" target='_blank' className="btn2 inline-flex items-center bg-[#000000] border-1 py-2 px-8 focus:outline-none hover:bg-gray-200 text-base text-white mt-4 md:mt-0">Whitepaper
    
    </a>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 py-10">
      <img className="top-pic object-cover object-center rounded" alt="hero" src="/rectangle-23@2x.png" />
    </div>
  </div>
</section>
<section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 pb-20 mx-auto">
  <div className='relative z-10 top-32'>
    <img src='/lightning-1.svg' className='w-20'/>
   </div>
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-gray-900">{lang.community}</h1>
    </div>
    <div className="flex justify-center md:space-x-28 space-x-5 ">
       <a href='https://twitter.com/estateprotocol'>
        <img src="/vector.svg" alt="" srcSet="" />
       </a>
       <a href='https://www.linkedin.com/company/estate-protocol'>

        <img src="/group.svg" alt="" srcSet="" />
       </a>
       <a href='https://t.me/+R_7wkTqbWGU4NGE1'>

        <img src="/vector1.svg" alt="" srcSet="" />
       </a>
    </div>
  </div>
</section>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto md:w-[70%] w-[90%]">
    <div id='about' className="flex flex-col text-center w-full mb-10">
     
      <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-gray-900">{lang.what}</h1>
      <p className="lg:w-2/3 mx-auto leading-8 text-lg">{lang.topheading}</p>
    </div>
    {/* <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
    <a href='https://verify-with.blockpass.org/?clientId=estate_protocol_1_fd4bb&serviceName=Estate%20Protocol&env=prod'>

    <button className="btn justify-center text-center mx-auto flex items-center bg-[#FF9AA2] border-1 py-2 px-8 focus:outline-none hover:bg-gray-200 text-base text-white mt-4 md:mt-0">{lang.register}
    
  </button>
    </a>
  </div>
</section>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto w-[70%]">
    <div className="flex flex-col text-center w-full mb-2">
      <h1 className="text-4xl font-medium title-font mb-4 text-gray-900">{lang.team}</h1>
    </div>  
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 w-64 h-60 object-contain mb-4" src="/2.jpg" />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">Parv Prabhakar</h2>
            <h3 className="text-gray-500 mb-3">CEO</h3>
            <span className="inline-flex">     
              <a href='https://twitter.com/ParvCrypto' className="ml-2 text-gray-500">           
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-5' fill="#1DA1F2" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" /></svg>

              </a>
              <a href='https://www.linkedin.com/in/parvprabhakar/' className="ml-2 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill='#0072b1' className='w-5' viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>

              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 w-64 h-60 object-contain mb-4" src="/1.jpeg" />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">Ryan smith</h2>
            <h3 className="text-gray-500 mb-3">Head of Real Estate</h3>
            {/* <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p> */}
            <span className="inline-flex">     
              <a href='https://www.linkedin.com/in/ryansmithnauset' className="ml-2 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill='#0072b1' className='w-5' viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>

              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 w-64 h-60 object-contain mb-4" src="/rectangle-11@2x.png" />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">Cvic Innocent</h2>
            <h3 className="text-gray-500 mb-3">CTO</h3>
            <span className="inline-flex">     
              <a href='https://www.linkedin.com/in/cvic-innocent-88447a5/' className="ml-2 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill='#0072b1' className='w-5' viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>

              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 w-64 h-60 object-contain mb-4" src="/rectangle-29@2x.png" />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">Vijeet Malik</h2>
            <h3 className="text-gray-500 mb-3 capitalize">Head of Community</h3>
            {/* <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p> */}
            <span className="inline-flex">     
              <a href='https://www.linkedin.com/in/vijeet-malik66626/' className="ml-2 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill='#0072b1' className='w-5' viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>

              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className='flex'>
    <div className='bg-[#FFDAC1] md:w-[75%] w-[90%] md:h-56 mx-auto btn md:py-10 py-4'>
    <div className="flex flex-col text-center w-full mb-2">
      <h1 className="text-4xl font-medium title-font mb-4 text-gray-900">{lang.partner}</h1>
    </div> 
    <div className='flex justify-center lg:space-x-10 space-x-2'>
    <img alt="team" className="lg:w-60 md:w-32 w-24 object-center mb-4" src="/rectangle-30@2x.png" />
    <img alt="team" className="lg:w-60 md:w-32 w-24 object-center mb-4" src="/rectangle-31@2x.png" />
    <img alt="team" className="lg:w-60 md:w-32 w-24 object-center mb-4" src="/rectangle-32@2x.png" />
    </div>



    </div>

</section>

<footer id='contact' className="text-gray-600 body-font bg-[#FFB7B2] mt-10">
<div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">

    <div className='flex items-center w-full flex-col justify-center'>
    <img alt="team" className="w-20 object-center mb-4" src="/logo-estate-1@2x.png" />
    <h2 className=" text-base font-medium title-font mb-4 text-gray-900">Questions? Suggestions?</h2>

    <div className='flex space-x-3'>
    
    <svg xmlns="http://www.w3.org/2000/svg" className='w-6' fill='white' viewBox="0 0 512 512"><path d="M255.4 48.2c.2-.1 .4-.2 .6-.2s.4 .1 .6 .2L460.6 194c2.1 1.5 3.4 3.9 3.4 6.5v13.6L291.5 355.7c-20.7 17-50.4 17-71.1 0L48 214.1V200.5c0-2.6 1.2-5 3.4-6.5L255.4 48.2zM48 276.2L190 392.8c38.4 31.5 93.7 31.5 132 0L464 276.2V456c0 4.4-3.6 8-8 8H56c-4.4 0-8-3.6-8-8V276.2zM256 0c-10.2 0-20.2 3.2-28.5 9.1L23.5 154.9C8.7 165.4 0 182.4 0 200.5V456c0 30.9 25.1 56 56 56H456c30.9 0 56-25.1 56-56V200.5c0-18.1-8.7-35.1-23.4-45.6L284.5 9.1C276.2 3.2 266.2 0 256 0z" /></svg>
    <a href='mailto:team@estateprotocol.com' target='_blank'>

    <span>team@estateprotocol.com</span>
    </a>


    </div>
    </div>
</div>
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col border-t border-black">
    {/* <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="ml-3 text-xl">Tailblocks</span>
    </a> */}
    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4 ">Copyright©2023.All Right Reserved
      {/* <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@knyttneve</a> */}
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-gray-500" href="#">
      Terms and Conditions
      </a>
      
    </span>
  </div>
</footer>



</div>

   </>
  )
}

export default Home