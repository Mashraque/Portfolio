import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "mariyas-mythical-mayhem",
    title: "Mariya's Mythical Mayhem",
    tagline: "Full-featured 3D Tower Defense Game with Wave AI & Resource Economy",
    category: "3D Game",
    type: "Complete 3D Strategy / Tower Defense Game",
    platform: "PC (Windows Standalone)",
    unityVersion: "Unity 2022.3 LTS",
    developmentStatus: "Completed Prototype / Playable",
    isPlaceholder: false,
    featured: true,
    image: "./assets/images/projects/mariya_mayhem.svg",
    overview: "A complete 3D tower defense game built in Unity and C#, featuring multiple progressive levels, custom enemy wave encounters, tactical tower placement, and real-time resource economy management.",
    role: "Sole Gameplay Programmer & Systems Architect",
    mainFeatures: [
      "Engineered core combat loops with target priority logic (closest, lowest HP, first in line).",
      "Dynamic wave spawning system with scaling difficulty tiers and enemy archetype variety.",
      "Defensive placement grid with real-time raycasting and collision boundary validation.",
      "Integrated resource economy (crystal energy collection, upgrade trees, sell-back ratio).",
      "Player core health tracking with custom 3D level navigation and pathfinding waypoints."
    ],
    technologies: ["Unity 3D", "C#", "NavMesh Waypoints", "Raycasting", "Observer Pattern", "uGUI System"],
    architectureOverview: "Architected around a central GameManager singleton coordinating with a WaveSpawner, NodePlacementController, and TowerCombatSystem via C# events to maintain zero tight-coupling between UI and game logic.",
    codeSnippet: {
      filename: "TowerTargeting.cs",
      language: "csharp",
      code: `using UnityEngine;

public class TowerTargeting : MonoBehaviour
{
    [Header("Attributes")]
    [SerializeField] private float range = 15f;
    [SerializeField] private float fireRate = 1f;
    [SerializeField] private LayerMask enemyLayer;

    private Transform targetEnemy;
    private float fireCountdown = 0f;

    void Start()
    {
        InvokeRepeating(nameof(UpdateTarget), 0f, 0.2f);
    }

    void UpdateTarget()
    {
        Collider[] hits = Physics.OverlapSphere(transform.position, range, enemyLayer);
        float shortestDistance = Mathf.Infinity;
        Transform nearestEnemy = null;

        foreach (Collider col in hits)
        {
            float dist = Vector3.Distance(transform.position, col.transform.position);
            if (dist < shortestDistance)
            {
                shortestDistance = dist;
                nearestEnemy = col.transform;
            }
        }

        targetEnemy = nearestEnemy;
    }

    void Update()
    {
        if (targetEnemy == null) return;

        // Smooth rotation towards targeted creep
        Vector3 dir = targetEnemy.position - transform.position;
        Quaternion lookRotation = Quaternion.LookRotation(dir);
        transform.rotation = Quaternion.Slerp(transform.rotation, lookRotation, Time.deltaTime * 10f);

        if (fireCountdown <= 0f)
        {
            ShootProjectile();
            fireCountdown = 1f / fireRate;
        }
        fireCountdown -= Time.deltaTime;
    }
}`
    },
    challenges: [
      {
        challenge: "Preventing lag spikes when spawning dozens of active 3D enemy creeps simultaneously.",
        solution: "Implemented an Object Pooling system for both enemy wave creeps and projectile particles, eliminating garbage collection allocation spikes during high-intensity combat."
      },
      {
        challenge: "Ensuring turret placement feels accurate and intuitive on uneven 3D terrain grids.",
        solution: "Utilized camera-to-world raycasting with layer masks and node snap anchors to give crisp visual placement feedback and prevent illegal tower overlap."
      }
    ],
    githubUrl: "https://github.com/Mashraque/Portfolio",
    demoUrl: "#",
    videoUrl: "#",
    buildDownloadUrl: "#"
  },
  {
    id: "romantic-quest",
    title: "Romantic Quest / Interactive Story",
    tagline: "Cinematic Narrative 3D Adventure with Cinemachine Camera Transitions",
    category: "3D Game",
    type: "Narrative 3D Adventure / Interactive Quest Prototype",
    platform: "PC (Windows / WebGL)",
    unityVersion: "Unity 2022.3 LTS",
    developmentStatus: "Completed Narrative Prototype",
    isPlaceholder: false,
    featured: true,
    image: "./assets/images/projects/romantic_quest.svg",
    overview: "A narrative-driven 3D adventure game featuring custom open-area exploration, interactive item collection, environmental puzzle mechanics, and dynamic cinematic camera transitions powered by Cinemachine.",
    role: "Gameplay Programmer, Camera Director & Quest Scripter",
    mainFeatures: [
      "Integrated Unity Cinemachine virtual camera blends between third-person exploration and story cutscenes.",
      "Built objective-tracking system for item gathering, dynamic clue triggers, and quest logs.",
      "Smooth cutscene transitions between real-life video elements and stylized 3D environments.",
      "Environmental interaction triggers with physics-based item inspection.",
      "Audio-visual feedback system delivering atmospheric storytelling."
    ],
    technologies: ["Unity 3D", "C#", "Cinemachine", "Timeline", "Video Player API", "Event System"],
    architectureOverview: "Employed a QuestManager state machine coupled with CinemachineVirtualCamera priority blending triggered through spatial Collider Triggers and C# delegates.",
    codeSnippet: {
      filename: "QuestTrigger.cs",
      language: "csharp",
      code: `using UnityEngine;
using Cinemachine;

public class QuestTrigger : MonoBehaviour
{
    [SerializeField] private CinemachineVirtualCamera cutsceneCam;
    [SerializeField] private string questStepId = "FIND_ANCIENT_KEY";
    [SerializeField] private GameObject clueHighlightFx;

    private bool hasTriggered = false;

    private void OnTriggerEnter(Collider other)
    {
        if (hasTriggered || !other.CompareTag("Player")) return;

        hasTriggered = true;
        cutsceneCam.Priority = 20; // Take over main exploration camera

        QuestEvents.TriggerObjectiveComplete(questStepId);
        if (clueHighlightFx != null) clueHighlightFx.SetActive(true);

        Invoke(nameof(RestoreGameplayCamera), 3.5f);
    }

    private void RestoreGameplayCamera()
    {
        cutsceneCam.Priority = 5; // Return to standard 3rd person camera
    }
}`
    },
    challenges: [
      {
        challenge: "Managing seamless camera blend transitions without stuttering player character state or input locks.",
        solution: "Designed an InputStateController that gracefully disables gameplay input during Cinemachine virtual camera blend curves and re-engages controls upon blend completion."
      },
      {
        challenge: "Synchronizing video cutscene playback with 3D scene lighting and audio transitions.",
        solution: "Leveraged Unity Timeline with custom Audio and VideoPlayer tracks, using render textures to project cutscenes directly onto in-engine cinematic planes."
      }
    ],
    githubUrl: "https://github.com/Mashraque/Portfolio",
    demoUrl: "#",
    videoUrl: "#",
    buildDownloadUrl: "#"
  },
  {
    id: "shadow-ninja-temple-escape",
    title: "Shadow Ninja: Temple Escape",
    tagline: "High-Agility 2D Action Platformer with Responsive Wall-Jumps & Combat",
    category: "2D Game",
    type: "2D Action Platformer Prototype",
    platform: "PC / Mobile",
    unityVersion: "Unity 2022.3 LTS",
    developmentStatus: "Playable Prototype (Placeholder)",
    isPlaceholder: true,
    featured: true,
    image: "./assets/images/projects/shadow_ninja.svg",
    overview: "A fast-paced 2D platformer featuring ultra-responsive character movement, wall jumps, dash mechanics, raycast ground detection, collectible coin economy, and tile-based level progression.",
    role: "Gameplay Programmer (Placeholder Prototype)",
    mainFeatures: [
      "Custom Rigidbody2D controller with coyote time, jump buffering, and raycast ground checks.",
      "Wall-slide, wall-jump, and aerial dash mechanics with dynamic particle trails.",
      "Tilemap level architecture with hazard spikes, moving platforms, and secret zones.",
      "Collectible score system with animated UI score counters and sound effects.",
      "Patrolling 2D enemy AI with sight triggers and bounce-stomp combat mechanics."
    ],
    technologies: ["Unity 2D", "C#", "Physics2D", "Tilemaps", "Sprite Animation", "Particle System"],
    architectureOverview: "Built with a dedicated PlayerStateMachine (Idle, Run, Jump, Fall, WallSlide, Dash) ensuring zero animation glitching and frame-perfect collision responsiveness.",
    codeSnippet: {
      filename: "PlayerController2D.cs",
      language: "csharp",
      code: `using UnityEngine;

public class PlayerController2D : MonoBehaviour
{
    [SerializeField] private float moveSpeed = 9f;
    [SerializeField] private float jumpForce = 14f;
    [SerializeField] private Transform groundCheck;
    [SerializeField] private LayerMask groundLayer;

    private Rigidbody2D rb;
    private bool isGrounded;
    private float coyoteTimeCounter;

    void Awake() => rb = GetComponent<Rigidbody2D>();

    void Update()
    {
        isGrounded = Physics2D.OverlapCircle(groundCheck.position, 0.2f, groundLayer);

        if (isGrounded) coyoteTimeCounter = 0.15f;
        else coyoteTimeCounter -= Time.deltaTime;

        if (Input.GetButtonDown("Jump") && coyoteTimeCounter > 0f)
        {
            rb.velocity = new Vector2(rb.velocity.x, jumpForce);
            coyoteTimeCounter = 0f;
        }
    }
}`
    },
    challenges: [
      {
        challenge: "Eliminating floaty jump physics and sticking against vertical tilemap walls.",
        solution: "Applied physics materials with zero friction on character colliders and added custom gravity multipliers during jump descent for snappy game feel."
      }
    ],
    githubUrl: "https://github.com/Mashraque/Portfolio",
    demoUrl: "#",
    videoUrl: "#",
    buildDownloadUrl: "#"
  },
  {
    id: "neon-drift-racing",
    title: "Neon Drift Racing",
    tagline: "Arcade Mobile Racing Prototype with Checkpoint Timing & Custom Car Physics",
    category: "3D Game",
    type: "Mobile Arcade Racing Prototype",
    platform: "Mobile (Android) & PC",
    unityVersion: "Unity 2022.3 LTS",
    developmentStatus: "Prototype (Placeholder)",
    isPlaceholder: true,
    featured: false,
    image: "./assets/images/projects/neon_drift.svg",
    overview: "A stylized arcade racing prototype optimized for mobile devices, featuring responsive vehicle drift mechanics, checkpoint sector timing, dynamic trailing camera, and low draw-call rendering.",
    role: "Gameplay & Physics Programmer (Placeholder)",
    mainFeatures: [
      "Custom arcade vehicle physics using raycast suspension and lateral tire friction.",
      "Holographic checkpoint gate system tracking split times, lap counter, and best records.",
      "Smooth Cinemachine trailing camera with speed-based FOV widening.",
      "Optimized for 60 FPS mobile rendering using low-poly assets and mobile shaders.",
      "Dual touch steering HUD controls with on-screen boost and handbrake buttons."
    ],
    technologies: ["Unity 3D", "C#", "Wheel Raycasts", "Cinemachine", "Mobile Optimization", "PlayerPrefs"],
    architectureOverview: "Modular VehicleController receiving inputs from either keyboard or on-screen touch joysticks, communicating with a LapTimer manager via C# events.",
    challenges: [
      {
        challenge: "Achieving stable vehicle drift feel without unpredictable Unity WheelCollider flipping.",
        solution: "Engineered a custom 4-point raycast suspension system in C# with manual lateral grip and torque curves."
      }
    ],
    githubUrl: "https://github.com/Mashraque/Portfolio",
    demoUrl: "#",
    videoUrl: "#",
    buildDownloadUrl: "#"
  },
  {
    id: "last-signal-survival",
    title: "Last Signal",
    tagline: "Third-Person Sci-Fi Survival Prototype with Enemy AI & Inventory",
    category: "Prototype",
    type: "Third-Person Survival Horror Prototype",
    platform: "PC (Windows)",
    unityVersion: "Unity 2022.3 LTS",
    developmentStatus: "Tech Demo / Prototype (Placeholder)",
    isPlaceholder: true,
    featured: false,
    image: "./assets/images/projects/last_signal.svg",
    overview: "An atmospheric third-person survival prototype set in a derelict orbital research station, featuring player health/stamina management, enemy patrol/chase AI, inventory gathering, and environmental hazard interaction.",
    role: "Gameplay & AI Programmer (Placeholder)",
    mainFeatures: [
      "NavMesh-based enemy patrol, investigation, and chase state machine AI.",
      "Player stamina, health, and flashlight battery consumption systems.",
      "Grid inventory for keycards, bio-samples, and diagnostic tools.",
      "Dynamic volumetric lighting and flickering emergency lighting triggers.",
      "Audio occlusion system simulating muffled sounds through heavy steel blast doors."
    ],
    technologies: ["Unity 3D", "C#", "NavMesh AI", "Finite State Machine", "Lighting VFX", "Audio Mixers"],
    architectureOverview: "State-driven AI architecture (PatrolState, AlertState, ChaseState, AttackState) allowing modular behavior addition and clean debugging.",
    challenges: [
      {
        challenge: "Handling dynamic AI pathfinding through lockable blast doors that open and close.",
        solution: "Used NavMeshObstacle carving components coupled with door open/close animation triggers to update AI navigation bounds dynamically."
      }
    ],
    githubUrl: "https://github.com/Mashraque/Portfolio",
    demoUrl: "#",
    videoUrl: "#",
    buildDownloadUrl: "#"
  },
  {
    id: "puzzle-core-3d",
    title: "Puzzle Core 3D",
    tagline: "Physics-Based Spatial Puzzle Game with Energy Cubes & Gravity Logic",
    category: "3D Game",
    type: "3D Spatial Physics Puzzle",
    platform: "PC (Windows Standalone)",
    unityVersion: "Unity 2022.3 LTS",
    developmentStatus: "Prototype (Placeholder)",
    isPlaceholder: true,
    featured: false,
    image: "./assets/images/projects/puzzle_core.svg",
    overview: "A 3D first-person puzzle game inspired by classic spatial mechanics, featuring gravity levitation beams, pressure plate triggers, laser reflection nodes, and persistent chamber save progression.",
    role: "Systems & Puzzle Programmer (Placeholder)",
    mainFeatures: [
      "Physics grab and levitation tether using physics joints and spring forces.",
      "Pressure-sensitive floor switches activating motorized elevators and forcefields.",
      "Laser reflection cubes with recursive raycasting calculating bounce vectors in real-time.",
      "Chamber progression state saving with serialized JSON level checkpoints.",
      "Haptic and audio cues providing satisfying tactile feedback on puzzle solution."
    ],
    technologies: ["Unity 3D", "C#", "Physics Joints", "Recursive Raycasting", "JSON Serialization"],
    architectureOverview: "Object-oriented PuzzleTrigger and PuzzleReceiver base classes enabling rapid creation of complex chained puzzles with simple inspector drag-and-drop linking.",
    challenges: [
      {
        challenge: "Rendering multi-bounce laser reflections efficiently without frame drops.",
        solution: "Implemented an iterative raycast bounce solver with a maximum reflection limit of 10 nodes, updating LineRenderer coordinates once per frame."
      }
    ],
    githubUrl: "https://github.com/Mashraque/Portfolio",
    demoUrl: "#",
    videoUrl: "#",
    buildDownloadUrl: "#"
  }
];
