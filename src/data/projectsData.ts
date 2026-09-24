import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "pew-pew-orbit",
    title: "Pew Pew Orbit",
    tagline: "Fast-Paced 2D Orbital Arcade Shooter with Dynamic Heat & Hazard Systems",
    category: "2D Game",
    type: "2D Arcade Shooter & Systems Integration",
    platform: "WebGL (Browser) & PC",
    unityVersion: "Unity 2022.3 LTS",
    developmentStatus: "Playable Beta Released",
    isPlaceholder: false,
    featured: true,
    image: "./assets/images/projects/pew_pew_orbit.svg",
    overview: "A responsive 2D orbital defense arcade game featuring 360-degree turret rotation around a central planet, weapon overheat mechanics, dynamic hazard spawning, and full WebGL optimization for browser play.",
    role: "Gameplay Prototyping & Systems Integration",
    mainFeatures: [
      "Engineered smooth 360-degree orbital turret rotation and aiming mechanics around a planetary center.",
      "Implemented weapon heat buildup loop with overheat penalties and responsive visual HUD feedback.",
      "Integrated dynamic asteroid and space hazard spawning with physics collisions and particle VFX.",
      "Structured audio management system triggering dynamic SFX for laser fire, impacts, and alerts.",
      "Optimized WebGL compression pipeline and deployed live playable beta build to Itch.io."
    ],
    technologies: ["Unity 2D", "C#", "Orbital Mechanics", "uGUI Heat System", "Audio Manager", "WebGL Optimization", "Itch.io"],
    architectureOverview: "Architected around modular components where OrbitalTurretController processes input and firing rates, communicating with HeatIndicatorUI to drive dynamic visual gauge updates, while an ObjectPool pattern manages high-velocity projectile lifecycles.",
    codeSnippet: {
      filename: "HeatIndicatorUI.cs",
      language: "csharp",
      code: `using UnityEngine;
using UnityEngine.UI;

namespace PewPewOrbit
{
    /// <summary>
    /// UI controller to display the turret's heat level and overheat pulse effect.
    /// </summary>
    public class HeatIndicatorUI : MonoBehaviour
    {
        [SerializeField] private OrbitalTurretController turret;
        [SerializeField] private Image fillImage;
        [SerializeField] private Gradient heatGradient;

        private void Update()
        {
            if (turret == null || fillImage == null) return;

            float heat = turret.HeatPercent;
            fillImage.fillAmount = heat;
            fillImage.color = heatGradient.Evaluate(heat);

            if (heat >= 1f)
            {
                // Overheated pulse effect
                Color c = fillImage.color;
                c.a = Mathf.PingPong(Time.time * 4f, 1f);
                fillImage.color = c;
            }
            else
            {
                // Reset alpha when not overheated
                Color c = fillImage.color;
                c.a = 1f;
                fillImage.color = c;
            }
        }
    }
}`
    },
    challenges: [
      {
        challenge: "Creating smooth, intuitive aiming and angular rotation around a circular planetary orbit.",
        solution: "Implemented polar coordinate translation and angular interpolation to ensure precise turret aiming with zero jitter."
      },
      {
        challenge: "Maintaining smooth 60 FPS in WebGL browsers during intense rapid laser bursts.",
        solution: "Integrated an Object Pooling lifecycle to recycle laser projectiles and particle instances, eliminating garbage collection allocation spikes."
      }
    ],
    githubUrl: "https://github.com/Mashraque",
    demoUrl: "https://its-mash-here.itch.io/pewpeworbit-beta",
    videoUrl: "https://its-mash-here.itch.io/pewpeworbit-beta"
  },
  {
    id: "rurouni-kurenai",
    title: "Rurouni Kurenai",
    tagline: "2D Action Platformer Controller with Parallax Depth & Item Triggers",
    category: "2D Game",
    type: "2D Platformer Mechanics Prototype",
    platform: "PC (Windows Standalone) / WebGL",
    unityVersion: "Unity 2022.3 LTS",
    developmentStatus: "In Active Development",
    isPlaceholder: false,
    featured: true,
    image: "./assets/images/projects/rurouni_kurenai.svg",
    overview: "A 2D side-scrolling action platformer prototype developed during Unity core studies, focusing on responsive physics-based character movement, state-driven animations, multi-layer parallax depth, and collectible coin mechanics.",
    role: "2D Gameplay Programmer",
    mainFeatures: [
      "Engineered custom 2D character physics controller with velocity clamping, variable jump height, and grounded raycasts.",
      "Implemented integer-hashed Animator parameters (Animator.StringToHash) for efficient, responsive state transitions.",
      "Built multi-layer camera-relative parallax scrolling system to create atmospheric depth across background planes.",
      "Created collectible item trigger loops (OnTriggerEnter2D) with real-time UI score updates and pickup animations.",
      "Structured smooth target-following camera with damping and deadzone boundaries."
    ],
    technologies: ["Unity 2D", "C#", "Rigidbody2D", "Animator Hashes", "Parallax Scrolling", "Camera Follow", "uGUI Score System"],
    architectureOverview: "Designed with decoupled modular scripts: PlayerMovement drives physics and animation states, ParallaxLayer calculates camera-relative offsets in LateUpdate, and PlayerCoinCollector manages pickup collision events and UI text communication.",
    codeSnippet: {
      filename: "PlayerMovement.cs",
      language: "csharp",
      code: `using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    [Header("Movement Settings")]
    [SerializeField] private float moveSpeed = 8f;
    [SerializeField] private float jumpForce = 14f;

    [Header("Ground Check Settings")]
    [SerializeField] private Transform groundCheckPoint;
    [SerializeField] private float groundCheckRadius = 0.2f;
    [SerializeField] private LayerMask groundLayer;

    private Rigidbody2D rb;
    private Animator animator;

    // Animator Parameter Hashes (efficient frame evaluation)
    private static readonly int AnimSpeed = Animator.StringToHash("Speed");
    private static readonly int AnimIsGrounded = Animator.StringToHash("IsGrounded");
    private static readonly int AnimVelocityY = Animator.StringToHash("VelocityY");

    private void Awake()
    {
        rb = GetComponent<Rigidbody2D>();
        animator = GetComponent<Animator>();
    }

    private void FixedUpdate()
    {
        // Ground overlap circle check
        bool grounded = Physics2D.OverlapCircle(
            groundCheckPoint.position, 
            groundCheckRadius, 
            groundLayer
        );

        // Apply horizontal velocity
        rb.velocity = new Vector2(horizontalInput * moveSpeed, rb.velocity.y);
    }
}`
    },
    challenges: [
      {
        challenge: "Eliminating floaty jump physics and ensuring crisp, responsive platform landings.",
        solution: "Implemented custom gravity multipliers on descending states alongside precision ground overlap circles for instant transition triggers."
      },
      {
        challenge: "Rendering multi-plane background depth without visual stutter during high-speed camera tracking.",
        solution: "Calculated layer-specific parallax factors relative to camera displacement inside LateUpdate to guarantee frame-perfect synchronization."
      }
    ],
    githubUrl: "https://github.com/Mashraque",
    demoUrl: "#"
  },
  {
    id: "book-of-us",
    title: "Book of Us",
    tagline: "Interactive 3D Narrative & Memory Celebration Application",
    category: "Prototype",
    type: "Interactive 3D Narrative Experience",
    platform: "PC (Windows Standalone)",
    unityVersion: "Unity 2022.3 LTS",
    developmentStatus: "Completed Milestone",
    isPlaceholder: false,
    featured: false,
    image: "./assets/images/projects/book_of_us.svg",
    overview: "A personalized 3D celebration application developed in Unity, exploring virtual 3D environment navigation, interactive object inspection, and dynamic cinematic camera transitions using Unity Cinemachine.",
    role: "Interactive Narrative Scripter & Camera Director",
    mainFeatures: [
      "Integrated Unity Cinemachine virtual cameras to blend smoothly between exploration views and story cutscenes.",
      "Constructed interactive item inspection triggers with modal UI dialogue overlays.",
      "Implemented atmospheric 3D environment lighting, audio triggers, and memory timeline progression."
    ],
    technologies: ["Unity 3D", "Cinemachine", "uGUI Dialogue System", "Event Triggers", "Audio Ambiance"],
    architectureOverview: "Leveraged Cinemachine Virtual Cameras with Priority transitions driven by player trigger zones, alongside responsive uGUI canvas panels for text and image presentation.",
    challenges: [
      {
        challenge: "Creating seamless camera blends between third-person navigation and focal point close-ups.",
        solution: "Utilized Cinemachine Brain blend lists with custom ease curves to deliver smooth, cinematic framing transitions."
      }
    ],
    githubUrl: "https://github.com/Mashraque"
  }
];
