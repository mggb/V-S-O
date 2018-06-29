<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PlaneteRepository")
 */
class Planete
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=200)
     */
    private $nom;

    /**
     * @ORM\Column(type="string", length=200)
     */
    private $habitat;

    /**
     * @ORM\Column(type="string", length=200)
     */
    private $population;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $gravite;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $luminosite;

    /**
     * @ORM\Column(type="string", length=200)
     */
    private $duree;

    /**
     * @ORM\Column(type="string", length=200)
     */
    private $temperature;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $climat;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $techno;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $environnement;

    /**
     * @ORM\Column(type="string", length=8000)
     */
    private $histoire;

    /**
     * @ORM\Column(type="string", length=500)
     */
    private $image;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $matricul;

    public function getId()
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getHabitat(): ?string
    {
        return $this->habitat;
    }

    public function setHabitat(string $habitat): self
    {
        $this->habitat = $habitat;

        return $this;
    }

    public function getPopulation(): ?string
    {
        return $this->population;
    }

    public function setPopulation(string $population): self
    {
        $this->population = $population;

        return $this;
    }

    public function getGravite(): ?string
    {
        return $this->gravite;
    }

    public function setGravite(string $gravite): self
    {
        $this->gravite = $gravite;

        return $this;
    }

    public function getLuminosite(): ?string
    {
        return $this->luminosite;
    }

    public function setLuminosite(string $luminosite): self
    {
        $this->luminosite = $luminosite;

        return $this;
    }

    public function getDuree(): ?string
    {
        return $this->duree;
    }

    public function setDuree(string $duree): self
    {
        $this->duree = $duree;

        return $this;
    }

    public function getTemperature(): ?string
    {
        return $this->temperature;
    }

    public function setTemperature(string $temperature): self
    {
        $this->temperature = $temperature;

        return $this;
    }

    public function getClimat(): ?string
    {
        return $this->climat;
    }

    public function setClimat(string $climat): self
    {
        $this->climat = $climat;

        return $this;
    }

    public function getTechno(): ?string
    {
        return $this->techno;
    }

    public function setTechno(string $techno): self
    {
        $this->techno = $techno;

        return $this;
    }

    public function getEnvironnement(): ?string
    {
        return $this->environnement;
    }

    public function setEnvironnement(string $environnement): self
    {
        $this->environnement = $environnement;

        return $this;
    }

    public function getHistoire(): ?string
    {
        return $this->histoire;
    }

    public function setHistoire(string $histoire): self
    {
        $this->histoire = $histoire;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getMatricul(): ?string
    {
        return $this->matricul;
    }

    public function setMatricul(string $matricul): self
    {
        $this->matricul = $matricul;

        return $this;
    }
}
