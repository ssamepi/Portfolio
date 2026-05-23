<script>
import Email from "@/components/Email.vue";
export default {
  components: { Email },
};
</script>

<template>
  <section class="contact">
    <h2>Contactez-moi</h2>
    <form action="https://formspree.io/f/xqenqryw" method="POST" class="form">
      <input
        type="email"
        name="email"
        placeholder="Email pour vous recontacter"
        required
      />
      <textarea name="message" placeholder="Votre message"></textarea>
      <button type="submit">Envoyer</button>
    </form>
    <a href="/CV_Sen-Sam_SAM.pdf" download="CV M.SAM Sen-Sam.pdf">Téléchargez mon cv</a>
    <Email />
  </section>
</template>

<style scoped>
.contact {
  padding: 60px 20px;
  text-align: center;
  background: #0f172a;
  color: white;
}

.contact h2 {
  margin-bottom: 30px;
  font-size: 2rem;
}

.form {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

input,
textarea {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #1e3a8a;
  background: #1e293b;
  color: white;
  font-size: 1rem;
  transition: 0.3s;
}

textarea {
  min-height: 120px;
  resize: none;
}

button {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #3b82f6;
  color: white;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #2563eb;
  transform: translateY(-2px);
}

a {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 20px;
  background: linear-gradient(135deg, #3b82f6, #178275);
  color: white;
  border-radius: 16px;
  font-weight: 600;
}

@media (max-width: 768px) {
  .contact {
    padding: 40px 15px;
  }

  .contact h2 {
    font-size: 1.6rem;
  }

  input,
  textarea {
    font-size: 0.95rem;
    padding: 10px;
  }
}

@media (max-width: 480px) {
  .contact h2 {
    font-size: 1.4rem;
  }

  .form {
    gap: 15px;
  }
}
</style>
