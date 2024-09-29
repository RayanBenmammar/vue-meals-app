<script setup></script>

<template>
  <div class="nav-container">
    <nav>
      <ul>
        <li>
          <a href="/"><strong>Home</strong></a>
        </li>
      </ul>
      <ul>
        <li><a href="/by-name/">Meals by Name</a></li>
        <li><a href="/by-letter/">Meals by Letter</a></li>
      </ul>
    </nav>
  </div>
  <div>
    <RouterView />
  </div>
</template>

<style scoped>
.nav-container {
  padding: 0 1rem;
}
</style>
