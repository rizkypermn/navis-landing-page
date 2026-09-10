import { CalendarDays, ArrowRight } from 'lucide-react';
import Navigation from '../../navigation';
import { Footer } from '../../sections';
import { ContactCard } from './actions';
import SharePost from '../share-post';
import './blog.css';

import { posts, type BlogPost } from '../posts';

export default function ArticleDetail({ post }: { post: BlogPost }) {
  const related = posts.filter(item => item.slug !== post.slug);
  return <div className="blog-page">
    <Navigation light/>
    <main className="blog-layout">
      <div className="blog-column">
        <article>
          <img className="blog-cover" src={post.image} width={924} height={606} alt={post.title} fetchPriority="high"/>
          <h1>{post.title}</h1>
          <div className="blog-meta"><div><span><CalendarDays size={18} aria-hidden="true"/><time dateTime={post.isoDate}>{post.date}</time></span></div><SharePost/></div>
          <div className="blog-body" lang="id">{post.slug === "brand-crisis-detection" ? <>
            <p>Satu keluhan mungkin terlihat biasa. Namun, ketika keluhan serupa mulai muncul di berbagai kanal, brand perlu segera memahami apa yang sedang terjadi.</p>
            <p>Krisis reputasi tidak selalu dimulai dari unggahan viral. Terkadang, tanda awalnya muncul melalui komentar pelanggan yang tidak terjawab, pengalaman buruk yang berulang, atau pertanyaan publik yang terus mendapat respons berbeda.</p>
            <p>Tantangan bagi brand bukan sekadar menemukan percakapan negatif, tetapi mengenali kapan percakapan tersebut menunjukkan masalah yang lebih besar. Di sinilah brand crisis detection berperan: membantu tim melihat sinyal awal, memahami konteksnya, dan mengambil tindakan sebelum isu meluas.</p>
            <h2>Mengenali Sinyal di Balik Percakapan</h2>
            <p>Brand crisis detection adalah proses memantau dan menilai potensi ancaman terhadap reputasi brand. Sumbernya dapat berasal dari media sosial, pemberitaan, forum komunitas, ulasan produk, hingga laporan layanan pelanggan.</p>
            <p>Jumlah penyebutan brand hanyalah salah satu petunjuk. Lonjakan percakapan bisa muncul karena kampanye yang berhasil, tetapi juga dapat menandakan kekecewaan yang menyebar. Untuk membedakannya, tim perlu melihat isi percakapan, penyebabnya, dan bagaimana isu berkembang.</p>
            <p>Beberapa sinyal yang perlu diperhatikan meliputi:</p>
            <ul>
              <li>Keluhan serupa yang berulang. Pelanggan berbeda melaporkan masalah yang sama, seperti keterlambatan pengiriman atau kualitas produk.</li>
              <li>Perubahan nada percakapan. Pertanyaan mulai berubah menjadi ungkapan kecewa, ketidakpercayaan, atau ajakan meninggalkan brand.</li>
              <li>Penyebaran lintas kanal. Isu yang awalnya muncul di kolom komentar mulai dibicarakan di forum, platform lain, atau media.</li>
              <li>Kesenjangan antara janji dan pengalaman. Publik mempertanyakan klaim brand karena tidak sesuai dengan pengalaman mereka.</li>
            </ul>
            <p>Sinyal tersebut perlu dinilai bersama. Satu laporan yang menyangkut keselamatan atau kebocoran data pun dapat memerlukan penanganan segera, meskipun belum mendapat banyak perhatian.</p>
            <h2>Memahami Konteks Sebelum Bereaksi</h2>
            <p>Tidak semua komentar negatif merupakan krisis. Kritik dapat berupa masukan yang valid, kesalahpahaman, atau pengalaman individual yang bisa diselesaikan melalui layanan pelanggan.</p>
            <p>Bayangkan sebuah brand meluncurkan produk baru. Beberapa pelanggan kemudian melaporkan kesulitan menggunakan fitur utama. Pada awalnya, laporan tersebut terlihat terpisah. Namun, ketika masalah yang sama muncul dalam ulasan produk dan tiket bantuan, tim memiliki alasan untuk menyelidiki kemungkinan gangguan yang lebih luas.</p>
            <p>Respons yang tepat dimulai dengan verifikasi: apa yang terjadi, siapa yang terdampak, dan apakah masalah masih berlangsung? Setelah itu, brand dapat menyampaikan informasi yang sudah dipastikan, menyediakan solusi sementara jika tersedia, dan menjelaskan kapan pembaruan berikutnya akan diberikan.</p>
            <p>Deteksi baru bernilai ketika temuan tersebut sampai kepada tim yang mampu menyelesaikan masalah.</p>
            <h2>Membangun Sistem Peringatan Dini</h2>
            <p>Sistem peringatan dini memerlukan lebih dari dashboard pemantauan. Brand perlu menentukan percakapan apa yang dipantau, bagaimana risiko dinilai, dan siapa yang bertanggung jawab menindaklanjutinya.</p>
            <p>Mulailah dengan memantau nama brand, produk, kampanye, serta variasi penulisan yang umum digunakan. Hubungkan temuan publik dengan data layanan pelanggan agar keluhan yang belum muncul di media sosial tetap terlihat.</p>
            <p>Selanjutnya, tetapkan kondisi percakapan normal sebagai pembanding. Perubahan perlu dibaca sesuai konteks, termasuk aktivitas kampanye, peluncuran produk, atau periode permintaan tinggi.</p>
            <p>Aturan eskalasi juga harus jelas. Isu layanan dapat diarahkan ke tim operasional, sementara laporan keselamatan atau privasi perlu segera melibatkan pihak terkait. Setiap peringatan sebaiknya memuat ringkasan masalah, bukti awal, potensi dampak, dan penanggung jawab.</p>
            <p>Teknologi dapat membantu mengelompokkan percakapan dan menandai perubahan pola. Namun, penilaian manusia tetap diperlukan untuk memahami sarkasme, bahasa lokal, dan konteks yang bisa terlewat oleh analisis otomatis.</p>
          </> : <>{post.sections.map(section => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>)}</>}
          </div>
        </article>
        <section className="blog-recent" aria-labelledby="recent-title"><div className="blog-recent-heading"><div><div className="eyebrow"><span/>News</div><h2 id="recent-title">Recent blog posts</h2></div><a className="button light" href="/#news">View All Post <ArrowRight size={22} aria-hidden="true"/></a></div>
          <div className="blog-recent-grid">{related.map((post) => <a className="blog-card-link" href={`/news/${post.slug}`} key={post.slug}><img src={post.image} width={320} height={230} loading="lazy" alt={post.title}/><time>{post.date}</time><h3>{post.title}</h3><p>{post.description}</p></a>)}</div>
        </section>
      </div>
      <ContactCard articleTitle={post.title}/>
    </main>
    <Footer/>
  </div>;
}
