<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

class Task
{
  protected $description;

  /**
   * @ORM\ManyToMany(targetEntity="App\Entity\Tag", cascade={"persist"})
   */
  protected $tags;

  public function __construct()
  {
    $this->tags = new ArrayCollection();
  }

  public function getDescription()
  {
    return $this->description;
  }

  public function setDescription($description)
  {
    $this->description = $description;
  }

  public function getTags()
  {
    return $this->tags;
  }

  public function addTag(Tag $tag)
  {
    $tag->addTask($this);
  }

  public function removeTag(Tag $tag)
  {
    $this->tags->removeElement($tag);
  }
}
