import { ref, watchEffect } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const darkMode = ref(false)
  
  // Persistir el tema en localStorage
  if (typeof localStorage !== 'undefined') {
    darkMode.value = localStorage.getItem('darkMode') === 'true'
  }
  
  // Aplicar el tema al body
  watchEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode.value)
    localStorage.setItem('darkMode', darkMode.value)
  })
  
  const toggleTheme = () => {
    darkMode.value = !darkMode.value
  }
  
  return { darkMode, toggleTheme }
})